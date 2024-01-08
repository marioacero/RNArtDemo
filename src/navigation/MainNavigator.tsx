import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigator} from './HomeNavigator';
import {FavoritesScreen} from '@screens/FavoritesScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Events"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
};

export default MainNavigator;
