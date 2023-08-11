import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Category } from '@utils/database';

import Highlight from '@components/Highlight';
import { Select } from '@components/Forms/Select';
import { Switcher } from '@components/Forms/Swichter';
import { InputForm } from '@components/Forms/InputForm';
import { Button } from '@components/Forms/Button';

import {
    Container,
    Form,
    ContainerButton,
} from './styles';

export function Balance() {
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Form>
                <Highlight onPress={handleBack} title='Incluir Lançamentos' />
                <Select placeholder='Categoria' />
                <Switcher isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
                <InputForm placeholder='Descrição' />
                <InputForm placeholder='Valor' />
            </Form>
            <ContainerButton>
                <Button.root>
                    <Button.title title="Incluir" />
                </Button.root>
            </ContainerButton>
        </Container>
    )
}

