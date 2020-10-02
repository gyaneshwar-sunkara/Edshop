import * as React from 'react';

import {StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

import Navigation from './containers/Navigation';
import {primary} from './values/colors';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primary} barStyle="default" />
      <Appbar.Header style={{backgroundColor: primary}}>
        <Appbar.Content title="Edshop" />
      </Appbar.Header>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
