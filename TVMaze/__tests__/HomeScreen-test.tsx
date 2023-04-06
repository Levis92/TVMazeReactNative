/**
 * @format
 */

import 'react-native';
import React from 'react';

import {HomeScreen} from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models';
import {render} from '../test-utils';

const Stack = createNativeStackNavigator<RootStackParamList>();

it('renders correctly', () => {
  render(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerStyle: {backgroundColor: 'transparent'}}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home - TV Maze'}}
      />
    </Stack.Navigator>,
  );
});
