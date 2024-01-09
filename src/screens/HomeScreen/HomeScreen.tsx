import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {routes} from '@navigation/routes';
import {HomeStackParamListNavProps} from '@navigation/useTypedNavigation';
import {useFetchEvents} from '@hooks/queries/useFetchEvents';
import {Event} from '@models/Event';
import {EventCard} from '@components/EventCard';
import {useAppDispatch} from '@hooks/storeAppSelector';
import {loadFavFromStorage} from '@utils/store';
import {Skeleton} from '@rneui/themed';
import notifee, {AuthorizationStatus} from '@notifee/react-native';

const HomeScreen: FC<HomeStackParamListNavProps<routes.Home>> = ({
  navigation,
}) => {
  const eventsQuery = useFetchEvents();
  const [sortedData, setSortedData] = useState<Event[]>([]);
  const dispatch = useAppDispatch();

  const renderEvent = (item: Event) => {
    return <EventCard event={item} onPress={onPressEvent} />;
  };

  const sortEvents = () => {
    const sorted = eventsQuery.data?.data.sort((a, b) => {
      const dateA = new Date(a.start_date).getTime();
      const dateB = new Date(b.start_date).getTime();
      return dateB - dateA;
    });
    setSortedData(sorted ? sorted : []);
  };

  const onPressEvent = (event: Event) => {
    navigation.navigate(routes.Details, {event});
  };

  const showNotification = async () => {
    await notifee.displayNotification({
      title: 'New Event for you!!',
      body: 'Check your home screen for new events',
    });
  };

  const sendPushNotification = async () => {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      showNotification();
    } else {
      console.log('User declined permissions');
    }
  };

  useEffect(() => {
    if (eventsQuery.data) {
      sortEvents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsQuery.data]);

  useEffect(() => {
    dispatch(loadFavFromStorage());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What do you want to do?</Text>
        <TouchableOpacity onPress={sendPushNotification}>
          <Text>Test push</Text>
        </TouchableOpacity>
      </View>
      {eventsQuery.isLoading && (
        <View style={styles.skeletonContainer}>
          <Skeleton animation="wave" width={'100%'} height={120} />
          <Skeleton
            style={styles.skeleton}
            animation="wave"
            width={'100%'}
            height={60}
          />
          <Skeleton animation="wave" width={'100%'} height={120} />
          <Skeleton
            style={styles.skeleton}
            animation="wave"
            width={'100%'}
            height={60}
          />
        </View>
      )}

      <View style={styles.list}>
        <FlatList
          data={sortedData}
          renderItem={({item}) => renderEvent(item)}
        />
      </View>
    </SafeAreaView>
  );
};

export {HomeScreen};
