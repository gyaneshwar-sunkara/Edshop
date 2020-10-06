import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Courses from './tabs/CoursesTab';
import Workshops from './tabs/WorkshopsTab';
import Clips from './tabs/ClipsTab';
import Profile from './tabs/ProfileTab';
import {primary} from '../values/colors';

// Navigator
const Tab = createMaterialBottomTabNavigator();

// Tab Icon Component
const tabIcon = (name) => ({color}) => (
  <Icon name={name} size={20} color={color} />
);

// Navigator Component
export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Courses'}
      barStyle={{backgroundColor: primary}}>
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: tabIcon('leanpub'),
        }}
      />
      <Tab.Screen
        name="Workshops"
        component={Workshops}
        options={{
          tabBarLabel: 'Workshops',
          tabBarIcon: tabIcon('desktop'),
        }}
      />
      <Tab.Screen
        name="Clips"
        component={Clips}
        options={{
          tabBarLabel: 'Clips',
          tabBarIcon: tabIcon('film'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: tabIcon('user-circle-o'),
        }}
      />
    </Tab.Navigator>
  );
}
