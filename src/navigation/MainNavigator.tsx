import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {FavoritesScreen} from '@screens/FavoritesScreen';
import {HomeScreen} from '@screens/HomeScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Events"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
};

export default MainNavigator;
