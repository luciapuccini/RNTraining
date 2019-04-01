import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/Store';
import Root from './src/navigation/rootNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
