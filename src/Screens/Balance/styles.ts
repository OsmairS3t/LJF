import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;
    justify-content: center;
`;

export const GroupHeaderBalance = styled.View`
    flex-direction: row;
`;

export const Icon = styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.BLACK,
}))``;

export const Title = styled.Text`
    flex: 1;
    font-size: large;
`;

export const Form = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const InputForm = styled.View``;

export const Label = styled.Text``;