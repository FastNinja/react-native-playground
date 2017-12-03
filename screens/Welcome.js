import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, TouchableHighlight, TextInput } from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import RoundedInput from '../components/RoundedInput';
import Logo from '../components/Logo';
import Message from '../components/Message';
import Top from '../components/Top';
import Input from '../components/Input';

import { ButtonStyles, BaseStyles } from '../components/Style';



export default class Welcome extends React.Component {
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
            <View style={{flex:1}}>
                <Text>...assembling the rocket...</Text>                
            </View>
        );
    }
}

const custom = StyleSheet.create({

    show: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid',
    },

});


