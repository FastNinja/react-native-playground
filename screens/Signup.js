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

    onLogin() {
        Alert.alert('Login!');
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
                        onPress={this.onSignup}>
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
                        onPress={this.onLogin}>
                    </LinkButton>

                </View>

            </View>
        );
    }
}


