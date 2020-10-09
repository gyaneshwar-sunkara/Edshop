import {primary} from './colors';

const screenOptions = {
  headerStyle: {
    backgroundColor: primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  transitionSpec: {
    open: {config: {duration: 200}},
    close: {config: {duration: 100}},
  },
};

export {screenOptions};
