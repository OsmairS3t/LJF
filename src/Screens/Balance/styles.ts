import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'
import { Pressable } from 'react-native'

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

export const GroupSwitch = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const TextSwitch = styled.Text`
    text-align: right;
    padding-right: 5px;
`;

export const GroupImage = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
`;

export const BtnImage = styled.Pressable`
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px dotted black;
    justify-content: center;
    align-items: center;
`;

export const BtnImageText = styled.Text`
    color: black;
`;

export const TextButton = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

