import React from 'react';
import { TextInput, View, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ label, value, onChangeText, placeholder, subTitle, isDisabled }) => {
  const {
    textInputStyle,
    labelStyle,
    containerStyle,
    boxStyles,
    labelContainerStyle,
    subTitleStyle,
    disabledStyle,
  } = styles;
  const disabled = isDisabled ? disabledStyle : {};

  const separated = label.split(' ');
  return (
    <View style={[containerStyle, disabled]}>
      <View style={labelContainerStyle}>
        <Text style={[labelStyle, disabled]}>{label}</Text>
      </View>

      <View style={[boxStyles, disabled]}>
        <TextInput
          editable={!isDisabled}
          clearButtonMode="always"
          placeholder={placeholder}
          autoCorrect={false}
          style={[textInputStyle, disabled]}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 12,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#cfd8dc',
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  labelContainerStyle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  labelStyle: {
    fontSize: 17,
    marginRight: 15,
  },
  boxStyles: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    borderColor: 'gray',
  },
  textInputStyle: {
    color: '#000',
    marginRight: 10,
    width: Dimensions.get('window').width * 0.65,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 17,
    lineHeight: 23,
  },
  disabledStyle: {
    backgroundColor: 'gray',
    borderColor: 'gray',
    color: 'gray',
  },
  subTitleStyle: {
    paddingLeft: 15,
    fontSize: 10,
    color: 'gray',
  },
};
// Input.Defaultprops = {
//   isDisabled: false,
// };
Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  subTitle: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Input;
