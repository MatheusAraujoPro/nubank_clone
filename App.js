import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack'

// import { Container } from './styles';

export default () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>  
  )
}
