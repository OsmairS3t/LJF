import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const GroupHeaderBalance = styled.View`
    flex-direction: row;
    align-items: center;
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
`;

export const InputForm = styled.View``;

export const Label = styled.Text``;