import { StyleSheet } from 'react-native';


const ButtonStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    buttonText: {
        padding: 8,
        color: 'white'
    },

    linkButton: {
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8
    },

    linkButtonText: {
        color: '#2196F3'
    }

});

const BaseStyles = StyleSheet.create({

    centerChild: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        maxWidth: 300,
    },

    screen: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    logo: {
        width: 150,
        height: 103
    },

    pb4: {
        paddingBottom: 24,
    },

    pb2: {
        paddingBottom: 12,
    },

    pt4: {
        paddingTop: 24,
    },

    mb4: {
        marginBottom: 24,
    },

    mt4: {
        marginTop: 24,
    },

    ml2: {
        marginLeft: 12,
    },
    mr2: {
        marginRight: 12,
    },

    ml4: {
        marginLeft: 24,
    },

    paddingTopMost: {
        paddingTop: 24,
    },

    borderBottom: {
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    borderTop: {
        borderTopColor: '#D9D9D9',
        borderTopWidth: StyleSheet.hairlineWidth
    },

    roundedBorder: {
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8
    },

    base: {
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',

        // fontFamily: 'montserrat',
        fontSize: 20,
    },

    smallText: {
        fontSize: 14,
    },

    mediumText: {
        fontSize: 22,
    },

    secondaryText: {
        // fontSize: 14,
        color: '#D9D9D9'
    },

    primaryText: {
        fontWeight: 'bold'
        //        color:'#D9D9D9'
    },

    avatar: {
        width: 42,
        height: 42
    },

    redBorder:{
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});

export { ButtonStyles, BaseStyles };
