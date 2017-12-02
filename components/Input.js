import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, TextInput } from 'react-native';

import { ButtonStyles, BaseStyles } from './Style';
import Button from './Button';

const Input = ({ placeholder, onSend, style = {} }) => (
    <View style={[
        BaseStyles.borderTop,
        BaseStyles.pb2,
        BaseStyles.paddingTopMost,
        { },
        style]}>
        <TextInput
            style={[BaseStyles.smallText,BaseStyles.ml2]}
            multiline={true}
            placeholder={placeholder} />
        <View style={[BaseStyles.ml2, {alignItems:"flex-end", justifyContent:'flex-end', flexDirection:"row"}]}>          
            <Button
                style={BaseStyles.mr2}
                textStyle={[BaseStyles.smallText, { padding: 2 }]}
                title="Send"
                onPress={this.onSend}>
            </Button>
        </View>
    </View>
);

export default Input;