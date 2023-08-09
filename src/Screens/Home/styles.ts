import styled from "styled-components/native";
import { Hamburger } from 'phosphor-react-native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    flex: 1;
    padding-top: 20px;
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Grafic = styled.View`
    margin-top: 5px;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Balance = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Price = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 18px;
`;

export const ImageGrafic = styled.Image`
    margin-right: 10px;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50px;
`;

export const TitleTransactions = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Transactions = styled.View`
    flex: 1;
`;

export const Transaction = styled.View`
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 3px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const IconTransaction = styled(Hamburger)`
    width: 24px;
    height: 24px;
`;

export const TextTransaction = styled.Text`
    flex: 1;    
    margin-left: 10px;
    margin-right: 10px;
    font-size: 18px;
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
`;

export const PriceTransaction = styled.Text`
    font-size: 18px;
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
`;
