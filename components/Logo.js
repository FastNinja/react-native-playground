
import { Image } from 'react-native';
import React from 'react';
import { ButtonStyles, BaseStyles } from './Style';

const Logo = ({ title, onPress, style = {} }) => (

    <Image
        style={[BaseStyles.logo, style]}
        source={require('../images/logo.png')}
    />

);

export default Logo;
