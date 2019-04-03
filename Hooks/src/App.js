import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

import TodosList from './TodosList';
import TodoForm from './TodoForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cardStyle: {
    flex: 1,
  },
});

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn Hooks',
      isCompleted: false,
    },
    {
      text: 'Something',
      isCompleted: false,
    },
    {
      text: 'Something else',
      isCompleted: false,
    },
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.welcome}>
        Todo's list
      </Text>
      <TodosList todos={todos} />
      <View style={styles.cardStyle}>
        <Text h4 style={styles.welcome}>
          Todos Form
        </Text>
        <TodoForm addTodo={addTodo} />
      </View>
    </SafeAreaView>
  );
};

export default App;
