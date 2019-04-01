
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View,StyleSheet,Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Thunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


export default class App extends Component {
  componentWillMount(){
  const config = {
    apiKey: "AIzaSyCGc2ZDxK0xtsJ4F7r2xssJ1TiI0CAgiE8",
    authDomain: "manager-dcf50.firebaseapp.com",
    databaseURL: "https://manager-dcf50.firebaseio.com",
    projectId: "manager-dcf50",
    storageBucket: "manager-dcf50.appspot.com",
    messagingSenderId: "268378447510"
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(Thunk))}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
