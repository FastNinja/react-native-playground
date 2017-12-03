import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, TouchableHighlight, TextInput ,KeyboardAvoidingView} from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';
import RoundedInput from '../components/RoundedInput';
import Logo from '../components/Logo';
import Message from '../components/Message';
import Top from '../components/Top';
import Input from '../components/Input';

import { ButtonStyles, BaseStyles } from '../components/Style';


let messages = [
    {
        key: "1",
        content: "Both iOS and Android allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text ",
        author: "Batman",
        createdOn: "11:12 PM"
    },

    {
        key: "2",
        content: "In cases you want to display a more personalized avatar for a user that hasn’t uploaded any image to his profile, ",
        author: "Joker",
        createdOn: "11:13 PM"
    },

    {
        key: "3",
        content: "Who are you trying to full again, me? ",
        author: "Batman",
        createdOn: "11:16 PM"
    },

    {
        key: "4",
        content: "Why noone answer me? Am I alone here",
        author: "Batman",
        createdOn: "11:30 PM"
    },

];



export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: messages
        };
    }

    componentWillMount() {
    }

    onLogin() {
        Alert.alert('Login!');
    }


    onSignup() {
        Alert.alert('signup!');
    }

    addMessage(text){
        var now = new Date();
        messages.push({
            key:messages.length + 1,
            content:text,
            author:"me",
            createdOn: now.getHours() + ":" + now.getMinutes()
        })

        this.setState({messages:messages});
    }



    renderMessage(item) {
        return <Message {...item} style={BaseStyles.mb4} />;
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <Top title="channel1" />

                <FlatList
                    data={this.state.messages}
                    renderItem={({ item }) => this.renderMessage(item)}
                />

                <KeyboardAvoidingView behavior="padding" >
                    <Input placeholder="message..." onSend={(text)=>this.addMessage(text) } />
                </KeyboardAvoidingView>
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


