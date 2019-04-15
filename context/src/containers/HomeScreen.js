/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Card } from 'react-native-elements';

import Tracks from './Tracks';

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Card title="Search for a song" titleStyle={styles.cardStyle}>
          <Input containerStyle={styles.inputStyle} placeholder="Song.." />
          <Button title="Search" onPress={() => navigation.navigate('details')} />
        </Card>
        <Tracks />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    fontSize: 30,
  },
  inputStyle: {
    marginBottom: 15,
    paddingHorizontal: 0,
  },
});
