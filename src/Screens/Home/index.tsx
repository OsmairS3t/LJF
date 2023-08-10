import Header from '@components/Header';
import { PieChart } from 'react-native-svg-charts';
import {
    Container,
    GroupButtonsHeader,
    Grafic,
    Balance,
    Price,
    Description,
    ImageGrafic,
    TitleTransactions,
    Transactions,
    Transaction,
    IconTransaction,
    TextTransaction,
    PriceTransaction
} from './styles';
import { Button } from '@components/Forms/Button';
import Footer from '@components/Footer';
import { useNavigation } from '@react-navigation/native'

export function Home() {
    const navigation = useNavigation();
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
        }
    ]

    function handleNewBalance() {
        navigation.navigate('balance')
    }

    return (
        <Container>
            <GroupButtonsHeader>
                <Button.root>
                    <Button.title title="Listar Lançamentos" />
                </Button.root>
                <Button.root>
                    <Button.title title="+ Lançamento" />
                </Button.root>
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
            <Transactions>
                <Transaction>
                    <IconTransaction></IconTransaction>
                    <TextTransaction>Coca-cola Lata 350ml</TextTransaction>
                    <PriceTransaction>35,00</PriceTransaction>
                </Transaction>

                <Transaction>
                    <IconTransaction></IconTransaction>
                    <TextTransaction>Oferta</TextTransaction>
                    <PriceTransaction>10,00</PriceTransaction>
                </Transaction>

                <Transaction>
                    <IconTransaction></IconTransaction>
                    <TextTransaction>Balas diversas</TextTransaction>
                    <PriceTransaction>5,00</PriceTransaction>
                </Transaction>

                <Transaction>
                    <IconTransaction></IconTransaction>
                    <TextTransaction>Inscrição conferência</TextTransaction>
                    <PriceTransaction>100,00</PriceTransaction>
                </Transaction>
            </Transactions>
        </Container>
    )
}
