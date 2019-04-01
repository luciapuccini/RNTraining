import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const CustomButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
      >
        <Text style={textStyle}> {children} </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#5d4157',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ebaae9 ',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5d4157',
    marginLeft: 5,
    marginRight: 5
  }
};
