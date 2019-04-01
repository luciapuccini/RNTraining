import React from 'react';
import { View, Text, Image } from 'react-native';

export const CardSection = (props) => {
  const { containerStyle } = style;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>);
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fccaca',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
