import styled from "styled-components/native";

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

export const InputText = styled.TextInput`
    width: 100%;
    max-height: 56px;
    min-height: 56px;
    border-radius: 10px;
    border-width: 1px;
    border-color: #a1a1a1;
    background-color: #e4e4e4;
`;
