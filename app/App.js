import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from './containers/Navigator';
import {primary} from './values/colors';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primary} barStyle="default" />
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
