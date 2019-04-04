import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <View>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
