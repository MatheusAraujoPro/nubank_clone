import React from 'react';
import { View, Text  } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'

import {
    Container,
    Logo,
    Title,
    Top,
    IconContainer,
    IconView,
} from './Styles'

// import { Container } from './styles';

export default () => {
    return (
        <Container>
            <Top>
                <Title>Olá, ...</Title>
            </Top>
            <IconContainer>
                <IconView>
                    <Icon name="eye" size={35} />
                </IconView>
                <IconView>
                    <Icon name="gear" size={35} />
                </IconView>
            </IconContainer>
        </Container>
    );
}


