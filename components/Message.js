import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';

import { ButtonStyles, BaseStyles } from './Style';


const Message = ({ content, author, createdOn, onAuthorSelected, style = {} }) => (
    <View style={[{ flexDirection: 'row', alignItems: 'stretch' }, style]}>
        <TouchableHighlight onPress={onAuthorSelected}>
            <Image
                style={[BaseStyles.avatar]}
                source={require('../images/avatar_2.png')}
            />
        </TouchableHighlight>

        <View style={[{ flexDirection: 'column', alignItems: 'stretch' }]}>
            <View style={[{ flexDirection: 'row', alignItems: 'stretch' }]}>

                <View >
                    <Text style={BaseStyles.primaryText} >{author}</Text>
                </View>
                <View >
                    <Text style={[BaseStyles.secondaryText, BaseStyles.ml2]} >{createdOn}</Text>
                </View>
            </View>

            <View>
                <Text>{content}</Text>
            </View>

        </View>

    </View>
);

export default Message;