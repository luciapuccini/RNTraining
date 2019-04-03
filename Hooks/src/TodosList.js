import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Todo from './Todo';

export default class TodosList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ScrollView
        centerContent
        ref="scroll"
        onContentSizeChange={(width, height) => this.refs.scroll.scrollToEnd()}
        style={{ flex: 1 }}
      >
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ScrollView>
    );
  }
}
