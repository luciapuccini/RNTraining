import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';

import Todo from './Todo';

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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native with hooks!</Text>
      <Card>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </Card>
    </SafeAreaView>
  );
};

export default App;
