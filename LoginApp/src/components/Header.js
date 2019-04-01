import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = (props) => (
  <Text style={styles.textStyle}>
    {props.title}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
  }
});
