import { TextInput } from 'react-native';
import styled from "styled-components/native";
import { CaretDown } from 'phosphor-react-native';

export const Container = styled(TextInput)`
    width: 100%;
    height: 56px;
    padding: 15px;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
