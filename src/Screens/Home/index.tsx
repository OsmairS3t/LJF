import Header from '@components/Header';
import { Container, 
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

import { CaretLeft } from 'phosphor-react-native'

export function Home() {
    return (
        <Container>
            <Header />
            <Grafic>
                <Balance>
                    <Price>R$ 930,00</Price>
                    <Description>Total Balanço</Description>
                </Balance>
                <ImageGrafic></ImageGrafic>
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
