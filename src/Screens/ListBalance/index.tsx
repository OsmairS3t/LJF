import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { IBalance } from '@utils/interfaces';
import { Balances } from '@utils/database'
import Highlight from '@components/Highlight';
import { Switcher } from '@components/Forms/Swichter';
import { Container } from './styles';
import { InputForm } from '@components/Forms/InputForm';
import { FlatList } from 'react-native'
import Transaction from '@components/Transaction';

export function ListBalance() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [balances, setBalances] = useState<IBalance[]>(Balances)
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }

    return (
        <Container>
            <Highlight onPress={handleBack} title="Listar Lançamentos" />
            <Switcher isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
            <InputForm placeholder='Data Inicial:' />
            <InputForm placeholder='Data Final:' />
            <FlatList
                style={{ marginTop: 20 }}
                data={balances}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Transaction balance={item} />}
            />
        </Container>
    )
}

