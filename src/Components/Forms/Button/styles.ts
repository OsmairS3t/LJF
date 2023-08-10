import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    max-height: 60px;
    min-height: 60px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const BackButton = styled.TouchableOpacity``;

export const Icon = styled(CaretLeft).attrs(({ theme })=>({
    size: 36,
    color: theme.COLORS.GRAY_600
}))``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;