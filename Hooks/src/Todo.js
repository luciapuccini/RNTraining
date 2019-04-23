/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';

const Todo = ({ index, todo, completeTodo, deleteTodo }) => (
  <View style={styles.ContainerStyle}>
    <Icon
      name="delete"
      reverse
      color="#E53935"
      onPress={() => {
        deleteTodo(index);
      }}
    />
    <ListItem
      style={styles.textTitleStyle}
      titleStyle={todo.completed ? styles.decoration : { textDecorationLine: 'none' }}
      title={todo.title}
      leftIcon={{ name: 'bookmark' }}
    />
    <Button
      title="Complete"
      buttonStyle={{ backgroundColor: '#BA68C8' }}
      containerStyle={styles.buttonStyle}
      onPress={() => {
        completeTodo(index);
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: '#EF9A9A',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitleStyle: {
    flex: 1,
    color: '#D32F2F',
    fontSize: 20,
  },
  decoration: {
    textDecorationLine: 'line-through',
  },
  buttonStyle: {
    padding: 5,
  },
});

export default Todo;
