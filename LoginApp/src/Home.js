import React, { Component } from 'react';
import {
  Text,
  SafeAreaView
} from 'react-native';


class Home extends Component {
  state = {
    loaded: false
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 30 }}>
          MY HOME
        </Text>
      </SafeAreaView>
    );
  }
}

export default Home;

