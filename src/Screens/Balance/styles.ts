import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.BLACK,
}))``;

export const Title = styled.Text`
    flex: 1;
    font-size: 24px;
`;

export const Form = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
`;

export const ContainerButton = styled.View`
    width: 100%;
    padding: 20px;
`;

