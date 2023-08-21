import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 45%;
    align-items: center;
`;

export const MessageView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MessageEmpty = styled.Text`
    width: 250px;
    height: 100px;
    border: 1px solid gray;
    border-style: dotted;
    padding: 20px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK};
`;

