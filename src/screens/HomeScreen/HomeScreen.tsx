import {FlatList, Text, View} from 'react-native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {routes} from '@navigation/routes';
import {HomeStackParamListNavProps} from '@navigation/useTypedNavigation';
import {useFetchEvents} from '@hooks/queries/useFetchEvents';
import {Event} from '@models/Event';

const HomeScreen: FC<HomeStackParamListNavProps<routes.Home>> = ({}) => {
  const eventsQuery = useFetchEvents();
  const renderEvent = (item: Event) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What do you want to do?</Text>
      </View>
      <FlatList
        data={eventsQuery.data?.data}
        renderItem={({item}) => renderEvent(item)}
      />
    </SafeAreaView>
  );
};

export {HomeScreen};
