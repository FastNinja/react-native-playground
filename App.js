import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Alert } from 'react-native';
import { Font } from 'expo';
import BlockCustomizedTextBox from './components/BlockCustomizedTextBox.js';


const myButtonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    padding: 8,
    color: 'white'
  },

  linkButton: {
    alignItems: 'center',
  },

  linkButtonText: {
    padding: 8,
  }

});

const MyHr = ({ color, style = {} }) => (
  <View
    style={[{
      borderBottomColor: '#C9C9C9',
      borderBottomWidth: 1,//StyleSheet.hairlineWidth

    }, style]}
  />
)

const MyButton = ({ title, onPress, style = {} }) => (
  <TouchableHighlight onPress={onPress} underlayColor="white">
    <View style={[myButtonStyles.button, styles.roundedBorder, style]}>
      <Text style={[myButtonStyles.buttonText, styles.base]}>{title}</Text>
    </View>
  </TouchableHighlight>
)

const MyLinkButton = ({ title, onPress, style = {} }) => (
  <TouchableHighlight onPress={onPress} underlayColor="white">
    <View style={[myButtonStyles.linkButton, style]}>
      <Text style={[myButtonStyles.linkButtonText, styles.base]}>{title}</Text>
    </View>
  </TouchableHighlight>
)


export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    });
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
      return <View style={styles.container} />
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <View style={[styles.container]}>

          <View style={styles.centerChild} >
            <Image
              style={[styles.logo, styles.mb4, { marginTop: 100 }]}
              source={require('./images/logo.png')}
            />
          </View>
          <View style={[styles.roundedBorder, styles.mb4]}>
            <BlockCustomizedTextBox style={styles.base} placeholder="Email Address" keyboardType="email-address"/>
          </View>
          <View style={[styles.roundedBorder, styles.mb4]}>
            <BlockCustomizedTextBox style={styles.base} placeholder="Password" secureTextEntry={true} returnKeyType="go"/>
          </View>


          <MyButton style={styles.mb4} title="Login" onPress={this.onLogin}> </MyButton>

          <MyLinkButton style={styles.mb4} title="Forget Password?" onPress={this.onForget}> </MyLinkButton>

          <MyHr style={styles.mb4} />

          <View style={styles.centerChild} >
            <Text style={[styles.base, styles.smallText]} >
              Dont have an account?
               </Text>
          </View>

          <MyLinkButton style={styles.mb4} title="Sign Up!" onPress={this.onSignup}> </MyLinkButton>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  centerChild: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    maxWidth: 300,
  },

  logo: {
    width: 150,
    height: 103
  },

  mb4: {
    marginBottom: 24,
  },

  mt4: {
    marginTop: 24,
  },

  roundedBorder: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8
  },

  base: {
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
    fontFamily: 'montserrat',
    fontSize: 20,
  },
  smallText: {

    fontSize: 14,
  },
});
