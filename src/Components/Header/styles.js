import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 30px;
    background-color: ${props => props.theme.colors.header.background};
    color: ${props => props.theme.colors.header.text};

    nav {
        display: flex;
        justify-content: space-between;
        width: 180px;
    }
`;
