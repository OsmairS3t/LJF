import { useState } from 'react';
import { FlatList } from 'react-native';
import Transaction from '@components/Transaction';
import { VictoryPie } from 'victory-native'
import {
    Container,
    GroupButtonsHeader,
    ButtonNavigate,
    TextButtonList,
    TextButtonNew,
    Chart,
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
            x: 'Lanchonete',
            y: 100,
            svg: { fill: '#FF9B04' },
            arc: { outerRadius: '130%', cornerRadius: 10, }
        },
        {
            x: 'Ofertas',
            y: 50,
            svg: { fill: '#F65050' }
        },
        {
            x: 'Eventos',
            y: 40,
            svg: { fill: '#0CB509' }
        },
        {
            x: 'Produtos',
            y: 30,
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
            <Chart>
                <VictoryPie
                    data={data}
                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                />
            </Chart>
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
