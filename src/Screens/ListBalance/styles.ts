import styled from "styled-components/native";

export const Container = styled.View`
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const GroupSwitch = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const TextSwitch = styled.Text`
    text-align: right;
    padding-right: 5px;
`;

export const List = styled.FlatList`
    flex: 1;
`;
