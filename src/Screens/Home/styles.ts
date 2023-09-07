import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { List, Plus } from 'phosphor-react-native'

export const Container = styled.SafeAreaView`
    background-color: ${({ theme }) => theme.COLORS.BG_SCREEN};
    padding-top: 5px;
`;

export const GroupButtonsHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonNavigate = styled.TouchableOpacity`
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    min-height: 30px;
    max-height: 30px;
`;

export const GroupInput = styled.View`
    width: 50%;
`;

export const ButtonDate = styled.Button``;

export const ListBalances = styled(List)``;

export const NewBalances = styled(Plus)``;

export const TitleTransactions = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ListRsume = styled.View`
    height: 65%;
`;

export const GroupGraphic = styled.View`
    width: 100%;
    height: 45%;
    align-items: center;
`;