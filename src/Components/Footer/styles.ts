import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    height: 30px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`;