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
    
      logo: {
        width: 150,
        height: 103
      },
    
      mb4: {
        marginBottom: 24,
      },
    
      mt4: {
        marginTop: 24,
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
    });

export {ButtonStyles, BaseStyles};
    