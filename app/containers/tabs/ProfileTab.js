import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screenOptions} from '../../values/styles';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
export default function ProfileTab() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
