import {routes} from '@navigation/routes';
import {HomeStackParamListNavProps} from '@navigation/useTypedNavigation';
import {Chip} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@themes/Colors';
import React, {FC, useCallback, useLayoutEffect, useState} from 'react';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import {
  NativeModules,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import HTML from 'react-native-render-html';
import {useAppDispatch, useAppSelector} from '@hooks/storeAppSelector';
import {addOrRemoveFav} from '@state/favorites';
import styles from './styles';

const DetailsScreen: FC<HomeStackParamListNavProps<routes.Details>> = ({
  route,
  navigation,
}) => {
  const {event} = route.params;
  const {width} = useWindowDimensions();
  const [iconName, setIconName] = useState('heart-o');
  const dispatch = useAppDispatch();
  const favEvents = useAppSelector(state => state.favorites.value);
  const {CalendarModule} = NativeModules;

  const checkFavState = useCallback(() => {
    let icon = 'heart-o';
    const favEvent = favEvents.find(item => item.id === event.id);
    if (favEvent) {
      icon = 'heart';
    }
    setIconName(icon);
  }, [favEvents, event.id]);

  const onPressFav = useCallback(() => {
    dispatch(addOrRemoveFav(event));
  }, [dispatch, event]);

  const favButton = useCallback(() => {
    return (
      <Pressable onPress={onPressFav}>
        <Icon name={iconName} size={25} color={Colors.orange} />
      </Pressable>
    );
  }, [iconName, onPressFav]);

  const addToCalendar = async () => {
    const result = await check(PERMISSIONS.IOS.CALENDARS);
    console.log(result);

    const dateComponents = event.start_date.split('T');
    const dateString = dateComponents[0];

    if (result === RESULTS.DENIED) {
      const status = await request(PERMISSIONS.IOS.CALENDARS);
      if (status === RESULTS.GRANTED) {
        CalendarModule.createCalendarEvent(
          event.title,
          `${dateString} ${event.start_time}`,
        );
      }
    } else if (result === RESULTS.GRANTED) {
      CalendarModule.createCalendarEvent(
        event.title,
        `${dateString} ${event.start_time}`,
      );
    }
  };

  useLayoutEffect(() => {
    checkFavState();
    navigation.setOptions({
      headerRight: () => favButton(),
    });
  }, [checkFavState, favButton, iconName, navigation]);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: event.image_url,
            }}
          />
          <View style={styles.chipContainer}>
            {event.is_member_exclusive && (
              <Chip
                title="Only members"
                containerStyle={styles.chip}
                titleStyle={styles.chipFont}
                color={Colors.background}
              />
            )}
            {event.is_free && (
              <Chip
                title="Free"
                containerStyle={styles.chip}
                color={Colors.background}
                titleStyle={styles.chipFont}
              />
            )}
            {event.is_admission_required && (
              <Chip
                title="Registration"
                containerStyle={styles.chip}
                titleStyle={styles.chipFont}
                color={Colors.background}
              />
            )}
          </View>
        </View>
        <View style={styles.contentCotainer}>
          <View>
            <Text>{event.title}</Text>
          </View>
          <View style={styles.row}>
            <Text>Date:</Text>
            <Text>{event.start_date}</Text>
          </View>
          <View style={styles.row}>
            <Text>Hour:</Text>
            <Text>{event.start_time}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={addToCalendar} style={styles.button}>
              <Text>Add to Calendar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <HTML source={{html: event.description}} contentWidth={width} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {DetailsScreen};
