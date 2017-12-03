import { View, TextInput } from 'react-native';
import React from 'react';
import { ButtonStyles, BaseStyles } from './Style';

const RoundedInput = ({ value, onChangeText, placeholder, secureTextEntry, returnKeyType, onPress, style = {} }) => (
    <View style={[BaseStyles.roundedBorder, BaseStyles.mb4]}>
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={BaseStyles.base}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            underlineColorAndroid={'rgba(0,0,0,0)'} />
    </View>

);

export default RoundedInput;