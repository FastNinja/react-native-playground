import React from 'react';
import { Alert } from 'react-native';
import { Font } from 'expo';

import { ButtonStyles, BaseStyles } from './components/Style';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Main from './screens/Main';

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
      <Main>

      </Main>
    );
  }
}


