import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native'

import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/HomeScreen';

const WIDTH = Dimensions.get('window').width;
const drawerConfig = {
  drawerWidth: WIDTH * 0.8
}

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
  },
  drawerConfig
);

export default createAppContainer(Drawer);