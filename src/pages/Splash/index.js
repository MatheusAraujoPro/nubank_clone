import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import {
    Container,
    Logo

} from './styles'

// import { Container } from './styles';



export default () => {

    const navigation = useNavigation();


    useEffect(() => {
        const timer = setTimeout(() => {           
            navigation.navigate('Main')  
        }, 5000);
        return () => clearTimeout(timer);  
    }, []);

    return (
        <Container>
            <Logo>
                <Image                                             
                    source={require('../../assets/Nubank.png')}/>
            </Logo>
        </Container>
    )
}

