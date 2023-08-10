import { useState } from 'react';
import { Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Highlight from '@components/Highlight';

import Input from '@components/Forms/Input';
import { Switcher } from '@components/Forms/Swichter';
import { Button } from '@components/Forms/Button';

import {
    Container,
    Form,
    ContainerButton,
} from './styles';
import Select from '@components/Forms/Select';

export function Balance() {
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Form>
                <Highlight onPress={handleBack} title='Incluir Lançamentos' />
                <Select label='Categoria' />
                <Switcher isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
                <Input label='Descrição:' key='description' />
                <Input label='Valor:' key='price' />
            </Form>
            <ContainerButton>
                <Button.root>
                    <Button.title title="Incluir" />
                </Button.root>
            </ContainerButton>
        </Container>
    )
}

