import React from 'react';
import {View, Text} from 'react-native';

export default function CourseScreen({route}) {
  const {title} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{title}</Text>
    </View>
  );
}
