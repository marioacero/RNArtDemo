import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/HomeScreen';
import React from 'react';
import {HomeNavigatorType} from './types';
import {routes} from './routes';

const {Navigator, Screen} = createStackNavigator<HomeNavigatorType>();

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={routes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
