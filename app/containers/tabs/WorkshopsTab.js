import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WorkshopsListScreen from '../screens/WorkshopsListScreen';
import WorkshopScreen from '../../components/screens/WorkshopScreen';
import {screenOptions} from '../../values/styles';

const Stack = createStackNavigator();

export default function WorkshopsTab() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Workshops" component={WorkshopsListScreen} />
      <Stack.Screen name="Workshop" component={WorkshopScreen} />
    </Stack.Navigator>
  );
}
