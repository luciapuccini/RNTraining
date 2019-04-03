/* eslint-disable no-console */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Input
        placeholder="...Add Todo"
        label="Todo: "
        leftIconContainerStyle={{ paddingRight: 10 }}
        leftIcon={{ type: 'font-awesome', name: 'edit' }}
        value={value}
        onChangeText={text => setValue(text)}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

export default TodoForm;
