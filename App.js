import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Alert } from 'react-native';
import { Font } from 'expo';
import HorizontalLine from './components/HorizontalLine';
import Button from './components/Button';
import LinkButton from './components/LinkButton';
import RoundedInput from './components/RoundedInput';
import Logo from './components/Logo';
import { ButtonStyles, BaseStyles } from './components/Style';

import Login from './screens/Login';

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    // await Font.loadAsync({
    //   montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    // });
    this.setState({ loaded: true });
  };

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
    if (!this.state.loaded) {
      return <View style={BaseStyles.container} />
    }
    return (
      <Login>

      </Login>
    );
  }
}


