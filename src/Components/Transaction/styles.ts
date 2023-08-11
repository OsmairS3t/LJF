import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native"

export const Container = styled.View`
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 3px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const IconTransaction = styled(MaterialIcons).attrs(({theme})=>({
    size: 24,
    color: theme.COLORS.BLACK
}))``;

export const TextTransaction = styled.Text`
    flex: 1;    
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const PriceTransaction = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
