import React, { Component } from 'react';

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Main from '../screens/Main'
import Welcome from '../screens/Welcome'

import { StackNavigator } from 'react-navigation';

// workaround for github issue https://github.com/react-community/react-navigation/issues/935
import { withMappedNavigationProps } from 'react-navigation-props-mapper'


export default Stack = StackNavigator({
    // Welcome: {
    //     screen: withMappedNavigationProps(Login)
    // },
    Login: {
        screen: withMappedNavigationProps(Login)
    },
    Signup: {
        screen: withMappedNavigationProps(Signup)
    },
    Main: {
        screen: withMappedNavigationProps(Main)
    },
}, {
    headerMode:"none"
});