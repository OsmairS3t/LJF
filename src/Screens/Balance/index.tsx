import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

import {
    Container,
    GroupHeaderBalance,
    Icon,
    Title,
    Form,
    InputForm,
    Label
} from './styles';

export function Balance() {
    return (
        <Container>
            <GroupHeaderBalance>
                <Icon />
                <Title>Incluir Lançamentos</Title>
            </GroupHeaderBalance>
            <Form>
                <InputForm>
                    <Label>Categoria:</Label>
                </InputForm>
            </Form>
        </Container>
    )
}

