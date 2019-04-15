import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from './components/Context';
import AppContainer from './navigation/rootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}
