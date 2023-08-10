import Highlight from '@components/Highlight';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';

export function ListBalance() {
    const navigation = useNavigation();

    function handleBack() {
        navigation.navigate('home')
    }
    return (
        <Container>
            <Highlight onPress={handleBack} title="LANÇAMENTOS" />
        </Container>
    )
}

