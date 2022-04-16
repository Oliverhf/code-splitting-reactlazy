import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const Aside = styled.aside`
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    border-right: ${props => props.theme.colors.text};
    width: 16%;
    padding: 0 10px;
    max-width: 700px;
    height: 100vh;
`;

export const Main = styled.main`
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    width: 55%;
`;

