import { TouchableHighlight, View, Text } from 'react-native';
import React from 'react';
import { ButtonStyles, BaseStyles } from './Style';

const LinkButton = ({ title, onPress, style = {} }) => (
    <TouchableHighlight onPress={onPress} underlayColor="#F6F6F6">
        <View style={[ButtonStyles.linkButton, style]}>
            <Text style={[ButtonStyles.linkButtonText, BaseStyles.base]}>{title}</Text>
        </View>
    </TouchableHighlight>
);

export default LinkButton;