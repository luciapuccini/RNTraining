import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './Header';

const Box = (props) => (
  < SafeAreaView style={styles.container} >

    <Header title={props.text} />

    {props.children}
  </SafeAreaView >
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  headerStyle: {
    fontSize: 30
  }
});
export default Box;
