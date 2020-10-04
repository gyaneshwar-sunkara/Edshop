import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Workshops from './screens/Workshops';
import Courses from './screens/Courses';
import Profile from './screens/Profile';
import {primary} from '../values/colors';

// Navigator
const Tab = createMaterialBottomTabNavigator();

// Tab Icon Component
const tabIcon = (name) => ({color}) => (
  <Icon name={name} size={20} color={color} />
);

// Navigator Component
export default function Navigation() {
  const home = Date.now() % 2 == 0 ? 'Workshops' : 'Courses';

  return (
    <Tab.Navigator
      initialRouteName={home}
      barStyle={{backgroundColor: primary}}>
      <Tab.Screen
        name="Workshops"
        component={Workshops}
        options={{
          tabBarLabel: 'Workshops',
          tabBarIcon: tabIcon('television'),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: tabIcon('graduation-cap'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: tabIcon('user-o'),
        }}
      />
    </Tab.Navigator>
  );
}
