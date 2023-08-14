import styled from "styled-components/native";
import { PieChart } from 'react-native-svg-charts';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    flex: 1;
    padding-top: 5px;
`;

export const GroupButtonsHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`;

export const ButtonNavigate = styled.TouchableOpacity`
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    min-height: 30px;
    max-height: 30px;
`;

export const TextButtonList = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const TextButtonNew = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLACK};
`;
export const Chart = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
`;

export const Grafic = styled.View`
    margin-top: 5px;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Balance = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

export const Price = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 18px;
`;

export const ImageGrafic = styled(PieChart)`
    width: 150px;
    height: 150px;
`;

export const TitleTransactions = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

