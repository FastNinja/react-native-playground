import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Keyboard } from 'react-native';

import { ButtonStyles, BaseStyles } from './Style';
import Button from './Button';

export default class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: null
        };
    }

    _send() {
        this.props.onSend(this.state.text);
        this.setState({ text: null });
        Keyboard.dismiss();
    }
    render() {
        var { placeholder, onSend, style = {} } = this.props;

        return (
            <View style={[
                BaseStyles.borderTop,
                BaseStyles.pb2,
                BaseStyles.paddingTopMost,
                {},
                style]}>

                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    style={[BaseStyles.smallText, BaseStyles.ml2]}
                    multiline={true}
                    placeholder={placeholder} />
                <View style={[BaseStyles.ml2, { alignItems: "flex-end", justifyContent: 'flex-end', flexDirection: "row" }]}>
                    <Button
                        style={BaseStyles.mr2}
                        textStyle={[BaseStyles.smallText, { padding: 2 }]}
                        title="Send"
                        onPress={() => this._send()}>
                    </Button>
                </View>
            </View>
        );
    }
}