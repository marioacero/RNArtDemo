import React from 'react';
import MainNavigator from '@navigation/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
