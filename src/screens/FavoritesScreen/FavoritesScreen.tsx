import {FlatList, View, Text} from 'react-native';
import React, {FC} from 'react';
import {routes} from '@navigation/routes';
import {HomeStackParamListNavProps} from '@navigation/useTypedNavigation';
import {Event} from '@models/Event';
import {EventCard} from '@components/EventCard';
import {useAppSelector} from '@hooks/storeAppSelector';
import {Colors} from '@themes/Colors';

const FavoritesScreen: FC<HomeStackParamListNavProps<routes.Home>> = ({
  navigation,
}) => {
  const favorites = useAppSelector(state => state.favorites.value);

  const renderEvent = (item: Event) => {
    return <EventCard event={item} onPress={onPressEvent} />;
  };

  const onPressEvent = (event: Event) => {
    navigation.navigate(routes.Details, {event});
  };

  if (favorites.length === 0) {
    return (
      <View style={{width: '100%', alignItems: 'center', marginTop: 90}}>
        <Text style={{color: Colors.grey}}>
          You will find your favorites on this screen
        </Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <FlatList data={favorites} renderItem={({item}) => renderEvent(item)} />
    </View>
  );
};

export {FavoritesScreen};
