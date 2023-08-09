import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 180px;
    margin-top: 3px;
    margin-bottom: 2px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const BackButton = styled.TouchableOpacity``;

export const Icon = styled(CaretLeft).attrs(({ theme })=>({
    size: 36,
    color: theme.COLORS.GRAY_600
}))``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;