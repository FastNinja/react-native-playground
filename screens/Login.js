import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import RoundedInput from '../components/RoundedInput';
import Logo from '../components/Logo';

import { ButtonStyles, BaseStyles } from '../components/Style';

export default class Login extends React.Component {

  componentWillMount() {
  }

  onLogin() {
    Alert.alert('Login!');
  }

  onForget() {
    Alert.alert('forget!');
  }

  onSignup() {
    Alert.alert('signup!');
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <View style={[BaseStyles.container]}>


          <View style={BaseStyles.centerChild} >
            <Logo style={[BaseStyles.mb4, { marginTop: 100 }]}>
            </Logo>

          </View>


          <RoundedInput
            placeholder="Email Address"
            keyboardType="email-address" />

          <RoundedInput
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="go" />

          <Button
            style={BaseStyles.mb4}
            title="Login"
            onPress={this.onLogin}>
          </Button>

          <LinkButton
            style={BaseStyles.mb4}
            title="Forget Password?"
            onPress={this.onForget}>
          </LinkButton>

          <HorizontalLine style={BaseStyles.mb4} />

          <View style={BaseStyles.centerChild} >
            <Text style={[BaseStyles.base, BaseStyles.smallText]} >
              Dont have an account?
               </Text>
          </View>

          <LinkButton
            style={BaseStyles.mb4}
            title="Sign Up!"
            onPress={this.onSignup}>
          </LinkButton>

        </View>

      </View>
    );
  }
}


