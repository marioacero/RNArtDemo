import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeNavigator} from './HomeNavigator';

const {Navigator, Screen} = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      {/* <Screen name="Settings" component={HomeScreen} /> */}
    </Navigator>
  );
};

export default MainNavigator;
