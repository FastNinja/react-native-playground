import { View } from 'react-native';
import React from 'react';

const HorizontalLine = ({ color, style = {} }) => (
    <View
      style={[{
        borderBottomColor: '#C9C9C9',
        borderBottomWidth: 1//StyleSheet.hairlineWidth
  
      }, style]}
    />
  )

  export default HorizontalLine;