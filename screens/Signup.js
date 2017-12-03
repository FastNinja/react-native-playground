import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import RoundedInput from '../components/RoundedInput';
import Logo from '../components/Logo';

import { ButtonStyles, BaseStyles } from '../components/Style';

export default class Signup extends React.Component {
    componentWillMount() {
    }

    onLogin(navigation) {
        navigation.navigate('Login');
    }

    onSignup(navigation) {
        navigation.navigate('Main');
    }

    render() {

        var { onLogin, onSignup, navigation } = this.props;

        return (
            <View style={BaseStyles.screen}>
            

                <View style={[BaseStyles.container]}>

                    <View style={BaseStyles.centerChild} >
                        <Logo style={[BaseStyles.mb4, { marginTop: 100 }]}>
                        </Logo>
                    </View>

                    <RoundedInput
                        placeholder="Your Name"
                    />

                    <RoundedInput
                        placeholder="Email Address"
                        keyboardType="email-address" />

                    <RoundedInput
                        placeholder="Password"
                        secureTextEntry={true}
                        returnKeyType="go" />

                    <Button
                        style={BaseStyles.mb4}
                        title="Sign up"
                        // onPress={this.onSignup}
                        onPress={() => this.onSignup(navigation)}
                    >
                    </Button>

                    <HorizontalLine style={BaseStyles.mb4} />

                    <View style={BaseStyles.centerChild} >
                        <Text style={[BaseStyles.base, BaseStyles.smallText]} >
                            Already have an account?
               </Text>
                    </View>

                    <LinkButton
                        style={BaseStyles.mb4}
                        title="Login"
                        //                        onPress={onLogin}
                        onPress={() => this.onLogin(navigation)}
                    >
                    </LinkButton>

                </View>

            </View>
        );
    }
}


