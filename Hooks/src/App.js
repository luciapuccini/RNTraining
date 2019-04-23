/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-elements';

import { useFetch } from './Hooks';
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
  const [todos, setTodos, loading] = useFetch('https://jsonplaceholder.typicode.com/todos');
  const addTodo = title => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.welcome}>
        Todo's list
      </Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TodosList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
      )}
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
