import { TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonHighlightIcon = styled.TouchableOpacity`
    width: 36px;
`;

export const Icon = styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.BLACK,
}))``;

export const GroupTitle = styled.View`
    flex: 1;
    margin-left: 25px;
`;

export const Title = styled.Text`
    font-size: 24px;
`;
