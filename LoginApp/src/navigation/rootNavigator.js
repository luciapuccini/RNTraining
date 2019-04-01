import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppNavigator from '../navigation/appNavigator';
import Splash from '../Splash';


const RootNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: Splash
    },
    App: {
      screen: AppNavigator
    }
  },
  {
    initialRouteName: 'Splash'
  }
);
const Root = createAppContainer(RootNavigator);

export default Root;

