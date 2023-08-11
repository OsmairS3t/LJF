import { useState } from 'react';
import { FlatList } from 'react-native';
import Transaction from '@components/Transaction';
import {
    Container,
    GroupButtonsHeader,
    ButtonNavigate,
    TextButtonList,
    TextButtonNew,
    Grafic,
    Balance,
    Price,
    Description,
    ImageGrafic,
    TitleTransactions
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Category, Balances } from '@utils/database';
import { IBalance, ICategory } from '@utils/interfaces';

export function Home() {
    const navigation = useNavigation();
    const [balances, setBalances] = useState<IBalance[]>(Balances)
    const [categories, setCategories] = useState<ICategory[]>(Category)
    const data = [
        {
            key: 1,
            value: 100,
            svg: { fill: '#FF9B04' },
            arc: { outerRadius: '130%', cornerRadius: 10, }
        },
        {
            key: 2,
            value: 50,
            svg: { fill: '#F65050' }
        },
        {
            key: 3,
            value: 40,
            svg: { fill: '#0CB509' }
        },
        {
            key: 4,
            value: 30,
            svg: { fill: '#49B6D9' }
        }
    ]

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
            <Grafic>
                <Balance>
                    <Price>R$ 930,00</Price>
                    <Description>Total Balanço</Description>
                </Balance>
                <ImageGrafic
                    style={{ height: 500 }}
                    outerRadius={'70%'}
                    innerRadius={10}
                    data={data}
                />
            </Grafic>
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
