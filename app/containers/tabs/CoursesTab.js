import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CoursesListScreen from '../screens/CoursesListScreen';
import CourseScreen from '../../components/screens/CourseScreen';
import {screenOptions} from '../../values/styles';

const Stack = createStackNavigator();

export default function CoursesTab() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Courses"
        component={CoursesListScreen}
        options={{
          title: 'Edshop',
        }}
      />
      <Stack.Screen name="Course" component={CourseScreen} />
    </Stack.Navigator>
  );
}
