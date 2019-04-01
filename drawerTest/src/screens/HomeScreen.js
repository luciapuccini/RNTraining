import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.homeStyles}>
          HOME
        </Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  homeStyles: {
    fontSize: 30,
    color: '#E91E63'
  }
})