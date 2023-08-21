import { useState } from 'react';
import { Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Highlight from '@components/Highlight';
import { Select } from '@components/Forms/Select';
import { Switcher } from '@components/Forms/Swichter';
import { InputForm } from '@components/Forms/InputForm';
import { Button } from '@components/Forms/Button';

import {
    Container,
    Form,
    ContainerButton,
    GroupSwitch,
    TextSwitch
} from './styles';

export function Balance() {
    const [typeTransformed, setTypeTransformed] = useState('Entrada')
    const [type, setType] = useState<string>('income')

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }

    function handleSwitch() {
        if (type === 'income') {
            setType('outcome')
            setIsEnabled(!isEnabled)
            setTypeTransformed('Saída')
        } else {
            setType('income')
            setIsEnabled(!isEnabled)
            setTypeTransformed('Entrada')
        }
    }

    return (
        <Container>
            <Form>
                <Highlight onPress={handleBack} title='Incluir Lançamentos' />
                <Select placeholder='Categoria' />
                <InputForm placeholder='Descrição' />
                <InputForm placeholder='Valor' />
                <GroupSwitch>
                    <TextSwitch>
                        {typeTransformed}
                    </TextSwitch>
                    <Switch
                        trackColor={{ false: '#792ec5', true: '#4b86eb' }}
                        thumbColor={isEnabled ? '#777' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={handleSwitch}
                        value={isEnabled}
                    />
                </GroupSwitch>
            </Form>
            <ContainerButton>
                <Button.root>
                    <Button.title title="Incluir" />
                </Button.root>
            </ContainerButton>
        </Container>
    )
}

