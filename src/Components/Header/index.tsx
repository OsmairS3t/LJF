import React from 'react';

import { Container, Logo, TextGroup, Title, SubTitle } from './styles';
import logoLuzJovem from '@assets/logo.png'
import logoFarol from '@assets/farol.png'

export default function Header() {
    return (
        <Container>
            <Logo source={logoLuzJovem} />
            <TextGroup>
                <Title>FINANCEIRO</Title>
                <SubTitle>Luz Jovem Anápolis</SubTitle>
            </TextGroup>
            <Logo source={logoFarol} />
        </Container>
    )
}

