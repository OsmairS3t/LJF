import styled from "styled-components/native";

interface SwichtProps {
    isEnabled: boolean;
}

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

export const BgContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-height: 56px;
    min-height: 56px;
    width: 100%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const SwContainerLeft = styled.TouchableOpacity<SwichtProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    width: 45%;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme, isEnabled }) => isEnabled ? theme.COLORS.GRAY_300 : theme.COLORS.BLACK};
`;

export const SwContainerRight = styled.TouchableOpacity<SwichtProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    width: 45%;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme, isEnabled }) => isEnabled ? theme.COLORS.BLACK : theme.COLORS.GRAY_300};
`;

export const SwTextLeft = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const SwTextRight = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
