import React, { Component } from 'react';
 import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, PurchaseButton, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    console.log("bubbleprops");
    const { email, password } = this.props;
    console.log(email, password);
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }
    return (
        <PurchaseButton onPress={this.onButtonPress.bind(this)}>
          Login
        </PurchaseButton>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorStyle} >
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          placeholder="user@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
          value= {this.props.email}
           />
        </CardSection>

        <CardSection>
        <Input
          hidden= {true}
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value= {this.props.password}
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
  errorStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
 })(LoginForm);
