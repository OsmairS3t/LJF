import React from 'react';

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
                    <button></button>
                </InputForm>
            </Form>
        </Container>
    )
}

