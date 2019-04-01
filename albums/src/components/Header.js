import React from 'react';
import { Text, View } from 'react-native';

export const Header = (props) => {
  const { textStyles, viewStyles } = Styles;
  const { text } = props;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{text}</Text>

    </View>
  );
};

const Styles = {
  textStyles: {
    fontSize: 20,
    paddingTop: 30
  },
  viewStyles: {
    backgroundColor: '#b46ee0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative'

  }
};
