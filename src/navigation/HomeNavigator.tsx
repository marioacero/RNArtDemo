import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeNavigatorType} from './types';
import {routes} from './routes';
import {DetailsScreen} from '@screens/DetailsScreen/DetailsScreen';
import MainNavigator from './MainNavigator';

const {Navigator, Screen} = createStackNavigator<HomeNavigatorType>();

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={routes.Home}
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <Screen
        name={routes.Details}
        component={DetailsScreen}
        options={{
          headerShown: true,
          title: 'Event Details',
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};
