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
    TitleTransactions,
    Transactions,
    Transaction,
    IconTransaction,
    TextTransaction,
    PriceTransaction
} from './styles';
import { Button } from '@components/Forms/Button';
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
