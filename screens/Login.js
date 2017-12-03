import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import RoundedInput from '../components/RoundedInput';
import Logo from '../components/Logo';

import { ButtonStyles, BaseStyles } from '../components/Style';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  onLogin(navigation){
    navigation.navigate('Main');
  }

  onSignup(navigation){
    navigation.navigate('Signup');
  }


  render() {
    var { onLogin, onSignup, onForget, navigation } = this.props;

    return (
      <View style={BaseStyles.screen}>

        <View style={[BaseStyles.container]}>


          <View style={BaseStyles.centerChild} >
            <Logo style={[BaseStyles.mb4, { marginTop: 100 }]}>
            </Logo>

          </View>


          <RoundedInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email: email })}
            placeholder="Email Address"
            keyboardType="email-address" />

          <RoundedInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password: password })}
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="go" />

          <Button
            style={BaseStyles.mb4}
            title="Login"
            // onPress={() => onLogin(this.state.email, this.state.password)}
            onPress={() => this.onLogin(navigation)}
            >
          </Button>

          <LinkButton
            style={BaseStyles.mb4}
            title="Forget Password?"
            onPress={onForget}>
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
            onPress={() => this.onSignup(navigation)}
            // onPress={onSignup}
            >
          </LinkButton>

        </View>

      </View>
    );
  }
}


