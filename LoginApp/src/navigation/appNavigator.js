import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Home from '../Home';
import Settings from '../Settings';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    Page1: createStackNavigator({
      Page1,
      Settings
    }),
    Page2: createStackNavigator({
      Page2,
      Settings
    }),
    Page3: {
      screen: Page3
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default AppNavigator;
