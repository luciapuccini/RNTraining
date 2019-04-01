/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Todo = ({ index, todo }) => (
  <View style={styles.titleContainerStyle}>
    <ListItem 
    style={styles.textTitleStyle} 
    key={index} 
    title={todo.text} 
    leftIcon={{name: 'bug-report' }} />
  </View>
);

const styles = StyleSheet.create({
  titleContainerStyle: {
    backgroundColor: '#EF9A9A',
    padding: 12,
  },
  textTitleStyle: {
    color: '#D32F2F',
    fontSize: 20,
  },
});

export default Todo;
