import React from 'react';
import { Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Item, Input } from 'native-base';
import { connect } from 'react-redux';

import { setValue } from './redux/actions';
import Box from './components/Box';

const validate = values => {
  const error = {};
  error.email = '';
  let ema = values.email;
  if (values.email === undefined) {
    ema = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  return error;
};

const renderInput = ({ input, name, label, type, meta: { touched, error, warning } }) => {
  console.log(input, label, type, touched);
  let hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Text>
        {label}
      </Text>
      {/* <Input {...input} onChange={(value) => this.props.setValue(input.value, name)} /> */}
      <Input {...input} onChange={(e) => console.log(e.target.value)} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

const Page1 = (props) =>
  (
    <Box text='PAGE 1'>
      <Field
        name='email'
        label='Email'
        component={renderInput}
      />
      <Field
        name='firstName'
        label='First Name'
        component={renderInput}
      />
      <Field
        name='lastName'
        label='Last Name'
        component={renderInput}
      />

    </Box>

  );

const mapDispatchToProps = (dispatch) => ({
  setValue: (value, name) => dispatch(setValue(value, name)),
});


const createReduxForm = reduxForm({ form: 'userForm', validate });
const Page1Form = createReduxForm(Page1);

export default connect(null, mapDispatchToProps)(Page1Form);
