import styled from "styled-components/native";
import { CaretDown } from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    height: 100px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 10px;
`;

export const InputSelect = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    max-height: 56px;
    min-height: 56px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #a1a1a1;
    background-color: #e4e4e4;
`;

export const PlaceHolder = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Icon = styled(CaretDown)`
    color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
