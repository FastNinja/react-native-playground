import React from 'react';
import { Alert, View } from 'react-native';
import { Font } from 'expo';

import { ButtonStyles, BaseStyles } from './components/Style';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Main from './screens/Main';

import Stack from './navigation/Stack';
import Workflow from './navigation/Workflow';


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
     
        <Stack>

        </Stack>
    );
  }
}


