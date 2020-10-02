import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Workshops from './screens/Workshops';
import Courses from './screens/Courses';
import Profile from './screens/Profile';
import {primary} from '../values/colors';

// Constants
const Tab = createMaterialBottomTabNavigator();

// Container Component
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
          tabBarIcon: ({color}) => (
            <Icon name="television" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({color}) => (
            <Icon name="graduation-cap" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="user-o" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
