import React from 'react';
import { View, Text } from 'react-native';
import Lyrics from '../components/Lyrics';

const DetailScreen = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Lyrics navigation={props.navigation} />
  </View>
);

export default DetailScreen;
