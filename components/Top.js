import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';

import { ButtonStyles, BaseStyles } from './Style';


const Top = ({ title, style = {} }) => (
    <View style={[BaseStyles.borderBottom, BaseStyles.pb2, BaseStyles.paddingTopMost, style]}>
        <Text style={[BaseStyles.primaryTex, BaseStyles.mediumText, BaseStyles.ml4]} >{title}</Text>
    </View>
);

export default Top;