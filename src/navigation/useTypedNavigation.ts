import {StackNavigationProp} from '@react-navigation/stack';
import {HomeNavigatorType} from './types';
import {RouteProp} from '@react-navigation/native';

export type HomeStackParamListNavProps<T extends keyof HomeNavigatorType> = {
  navigation: StackNavigationProp<HomeNavigatorType, T>;
  route: RouteProp<HomeNavigatorType, T>;
};
