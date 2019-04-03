import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Card, Text } from 'react-native-elements';

import Todo from './Todo';
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
      <Text h3 style={styles.welcome}>
        Welcome to RN with hooks!
      </Text>
      <Card>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </Card>
      <Text h4 style={styles.welcome}>
        Todos Form
      </Text>
      <TodoForm addTodo={addTodo} />
    </SafeAreaView>
  );
};

export default App;
