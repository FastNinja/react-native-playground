import React from 'react';
import { TextInput } from 'react-native';
import { Component } from 'react';

class BlockCustomizedTextBox extends Component{
    constructor(props) {
        super(props);
        this.style = props.style;
        this.placeholder = props.placeholder;
        this.keyboardType = props.keyboardType;
        this.secureTextEntry = props.secureTextEntry;
        this.returnKeyType = props.returnKeyType;
    }
    render() {
        return (
            <TextInput style={this.style}
                       keyboardType={this.keyboardType}
                       placeholder={this.placeholder}
                       secureTextEntry={this.secureTextEntry}
                       returnKeyType={this.returnKeyType}
                       underlineColorAndroid={'rgba(0,0,0,0)'}>

            </TextInput>
        );
    }
}

export default BlockCustomizedTextBox;