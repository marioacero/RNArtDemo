import {routes} from '@navigation/routes';
import {HomeStackParamListNavProps} from '@navigation/useTypedNavigation';
import {Chip} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@themes/Colors';
import React, {FC, useCallback, useLayoutEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import HTML from 'react-native-render-html';
import {useAppDispatch, useAppSelector} from '@hooks/storeAppSelector';
import {addOrRemoveFav} from '@state/favorites';

const DetailsScreen: FC<HomeStackParamListNavProps<routes.Details>> = ({
  route,
  navigation,
}) => {
  const {event} = route.params;
  const {width} = useWindowDimensions();
  const [iconName, setIconName] = useState('heart-o');
  const dispatch = useAppDispatch();
  const favEvents = useAppSelector(state => state.favorites.value);

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
            style={{width: '100%', height: 190}}
            source={{
              uri: event.image_url,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 8,
              bottom: 0,
            }}>
            {event.is_member_exclusive && (
              <Chip
                title="Only members"
                containerStyle={{
                  marginVertical: 12,
                  marginRight: 8,
                }}
                titleStyle={{fontSize: 10}}
                color={Colors.background}
              />
            )}
            {event.is_free && (
              <Chip
                title="Free"
                containerStyle={{
                  marginVertical: 12,
                  marginRight: 8,
                }}
                color={Colors.background}
                titleStyle={{fontSize: 10}}
              />
            )}
            {event.is_admission_required && (
              <Chip
                title="Registration"
                containerStyle={{marginVertical: 12, marginRight: 8}}
                titleStyle={{fontSize: 10}}
                color={Colors.background}
              />
            )}
          </View>
        </View>
        <View style={{paddingHorizontal: 8}}>
          <View>
            <Text>{event.title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Date:</Text>
            <Text>{event.start_date}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Hour:</Text>
            <Text>{event.start_time}</Text>
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
