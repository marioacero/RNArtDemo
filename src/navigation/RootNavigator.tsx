import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './HomeNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
