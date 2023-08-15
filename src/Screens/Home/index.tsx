import { useState } from 'react';
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
    TextButtonList,
    TextButtonNew,
    TitleTransactions
} from './styles';

export function Home() {
    const navigation = useNavigation();
    const [balances, setBalances] = useState<IBalance[]>(Balances)
    const [categories, setCategories] = useState<ICategory[]>(Category)

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
                    <TextButtonList>Listar Lançamentos</TextButtonList>
                </ButtonNavigate>
                <ButtonNavigate onPress={handleNewBalance}>
                    <TextButtonNew>+ Lançamento</TextButtonNew>
                </ButtonNavigate>
            </GroupButtonsHeader>

            <Graphic />

            <TitleTransactions>ÚLTIMOS LANÇAMENTOS</TitleTransactions>
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
