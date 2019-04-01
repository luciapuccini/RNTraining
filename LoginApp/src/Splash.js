import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('App'), 1000);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          SPLASH
      </Text>
      </View>
    );
  }
}
