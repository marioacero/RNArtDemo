import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/HomeScreen';
import React from 'react';
import {HomeNavigatorType} from './types';
import {routes} from './routes';
import {DetailsScreen} from '@screens/DetailsScreen/DetailsScreen';

const {Navigator, Screen} = createStackNavigator<HomeNavigatorType>();

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={routes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen
        name={routes.Details}
        component={DetailsScreen}
        options={{
          headerShown: true,
          title: 'Event Details',
          // headerStyle: {
          //   backgroundColor: Colors.background,
          // },
          // headerTintColor: Colors.white,
          // headerShadowVisible: false, // applied here
          headerBackTitleVisible: false,
        }}
      />
    </Navigator>
  );
};
