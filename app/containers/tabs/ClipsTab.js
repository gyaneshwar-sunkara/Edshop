import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screenOptions} from '../../values/styles';
import ClipsScreen from '../screens/ClipsScreen';

const Stack = createStackNavigator();

export default function ClipsTab() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Clips" component={ClipsScreen} />
    </Stack.Navigator>
  );
}
