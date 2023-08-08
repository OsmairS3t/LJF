import styled from "styled-components/native";

export const Container = styled.View`
    padding-top: 10px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;  

export const TextGroup = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme })=> theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
`;
