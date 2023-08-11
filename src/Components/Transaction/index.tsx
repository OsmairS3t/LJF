import { MaterialIcons } from '@expo/vector-icons';
import { Category } from '@utils/database'
import {
    Container,
    IconTransaction,
    TextTransaction,
    PriceTransaction
} from './styles'

interface TransactionProps {
    balance: {
        icon?: keyof typeof MaterialIcons.glyphMap;
        id: number;
        category: number;
        typebalance: string;
        name: string;
        price: number;
        datebalance: string;
    }
}

export default function Transaction({ balance }: TransactionProps) {

    function searchIcon(category: number) {
        const findIcon = Category.find((cat) => cat.id === category)
        return findIcon?.icon;
    }

    return (
        <Container key={balance.id}>
            <IconTransaction name={searchIcon(balance.category)} />
            <TextTransaction>{balance.name}</TextTransaction>
            <PriceTransaction>{balance.price}</PriceTransaction>
        </Container>
    )
}