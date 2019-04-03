/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Todo from './Todo';

export default class TodosList extends Component {
  render() {
    const { todos, completeTodo, deleteTodo } = this.props;

    return (
      <ScrollView
        centerContent
        ref="scroll"
        onContentSizeChange={() => this.refs.scroll.scrollToEnd()}
        style={{ flex: 1 }}
      >
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
      </ScrollView>
    );
  }
}
