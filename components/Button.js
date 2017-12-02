import { TouchableHighlight, View, Text } from 'react-native';
import React from 'react';
import { ButtonStyles, BaseStyles } from './Style';

const Button = ({ title, onPress, style = {}, textStyle={} }) => (
    <TouchableHighlight onPress={onPress} underlayColor="white">
        <View style={[ButtonStyles.button, BaseStyles.roundedBorder, style]}>
            <Text style={[ButtonStyles.buttonText, BaseStyles.base, textStyle]}>{title}</Text>
        </View>
    </TouchableHighlight>
)

export default Button;