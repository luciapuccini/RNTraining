import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import Drawer from './src/navigation/Drawer';
// import Drawer from './src/components/Drawer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Drawer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
