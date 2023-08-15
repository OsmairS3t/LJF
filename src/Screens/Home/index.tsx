import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Category, Balances, ResumeBalances } from '@utils/database';
import { IBalance, ICategory, IResumeBalance } from '@utils/interfaces';
import { Graphic } from '@components/Graphic';
import Transaction from '@components/Transaction';
import {
    Container,
    GroupButtonsHeader,
    ButtonNavigate,
    ListBalances,
    NewBalances,
    GroupInput,
    TitleTransactions
} from './styles';
import { InputForm } from '@components/Forms/InputForm';

export function Home() {
    const navigation = useNavigation();
    const [dateBalance, setDateBalance] = useState('01/08/2023')
    const [balances, setBalances] = useState<IBalance[]>([])
    const [categories, setCategories] = useState<ICategory[]>(Category)

    useEffect(() => {
        setBalances(Balances.filter(balance => balance.datebalance === dateBalance))
    }, [dateBalance])

    function handleListBalance() {
        navigation.navigate('listbalance')
    }

    function handleNewBalance() {
        navigation.navigate('balance')
    }

    return (
        <Container>
            <GroupButtonsHeader>
                <ButtonNavigate onPress={handleListBalance}>
                    <ListBalances size={50} />
                </ButtonNavigate>
                <GroupInput>
                    <InputForm
                        placeholder='10/08/2023'
                        onChangeText={setDateBalance}
                        value={dateBalance}
                    />
                </GroupInput>
                <ButtonNavigate onPress={handleNewBalance}>
                    <NewBalances size={50} />
                </ButtonNavigate>
            </GroupButtonsHeader>

            <Graphic dateBalance={dateBalance} setDateBalance={() => setDateBalance} />

            <TitleTransactions>LANÇAMENTOS DE {dateBalance}</TitleTransactions>
            <FlatList
                data={balances}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Transaction balance={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
