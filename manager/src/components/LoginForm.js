import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, Button, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)

  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)

  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password })
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return (
      <Button onPress={(e) => this.onButtonPress(e)}>
        Send
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmal.com"
            onChangeText={(event) => this.onEmailChange(event)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(event) => this.onPasswordChange(event)}
            value={this.props.password}
          />

        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)