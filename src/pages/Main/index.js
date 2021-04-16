import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index' 
import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Annotation,
    Title,
    Description,
    DescriptionHeader,
    Strong,
    SubDescription,
    SubDescriptionValor,
    CardContainer,
    CardScroll

} from './styles'


// import { Container } from './styles';

export default () => {
    return (
       
        <Container > 
            <Header/>          
            <CardContainer>
                <View style={{
                    height: 30
                }}>

                </View>
                <CardScroll>
                    <View style={{
                        height: 190
                    }}>
                        <Card>
                            <CardHeader>
                                <Icon name="credit-card" size={30} color="#666" style={{
                                    paddingLeft: 15
                                }} />
                                <DescriptionHeader>Cartão de Crédito</DescriptionHeader>
                            </CardHeader>
                            <CardContent>
                                <Title>Fatura Atual</Title>
                                <Description>
                                    R$ <Strong>00,00</Strong>
                                </Description>
                                <SubDescription>
                                    Limite Disponível{''}
                                    <SubDescriptionValor> R$ 1.255,00</SubDescriptionValor>
                                </SubDescription>
                            </CardContent>
                        </Card>
                    </View>

                    <View style={{
                        height: 190,
                        marginTop: 10
                    }}>
                        <Card>
                            <CardHeader>
                                <Icon name="local-atm" size={30} color="#666" style={{
                                    paddingLeft: 15
                                }} />
                                <DescriptionHeader>Conta</DescriptionHeader>
                            </CardHeader>
                            <CardContent>
                                <Title>Saldo Disponível</Title>
                                <Description>
                                    <Strong style={{
                                        color: 'black'
                                    }}>
                                        R$ 200,00
                            </Strong>
                                </Description>
                            </CardContent>
                        </Card>
                    </View>

                    <View style={{
                        height: 190,
                        marginTop: 10
                    }}>
                        <Card>
                            <CardHeader>
                                <Icon name="local-atm" size={30} color="#666" style={{
                                    paddingLeft: 15
                                }} />
                                <DescriptionHeader>Conta</DescriptionHeader>
                            </CardHeader>
                            <CardContent>
                                <Title>Saldo Disponível</Title>
                                <Description>
                                    <Strong style={{
                                        color: 'black'
                                    }}>
                                        R$ 200,00
                            </Strong>
                                </Description>
                            </CardContent>
                        </Card>
                    </View>


                    <View style={{
                        height: 190,
                        marginTop: 10
                    }}>
                        <Card>
                            <CardHeader>
                                <Icon name="local-atm" size={30} color="#666" style={{
                                    paddingLeft: 15
                                }} />
                                <DescriptionHeader>Conta</DescriptionHeader>
                            </CardHeader>
                            <CardContent>
                                <Title>Saldo Disponível</Title>
                                <Description>
                                    <Strong style={{
                                        color: 'black'
                                    }}>
                                        R$ 200,00
                            </Strong>
                                </Description>
                            </CardContent>
                        </Card>
                    </View>
                </CardScroll>         
            </CardContainer>
            <Footer/>
        </Container>
    )
}

