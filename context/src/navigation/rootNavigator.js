/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import DetailScreen from '../containers/DetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    details: DetailScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Lyrics search',
      headerStyle: {
        backgroundColor: '#455A64',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
