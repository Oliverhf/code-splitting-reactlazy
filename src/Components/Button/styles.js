import styled from "styled-components";

export const Button = styled.button`
    display: block;
    margin:  auto;
    height: 60px;
    z-index: 20;
    cursor: pointer;
    width: 120px;
    border: ${props => props.theme.colors.button.border};
    border-radius:  ${props => props.theme.colors.button.radius};
    padding: 0 12px;
    background-color: ${props => props.theme.colors.button.background};
    color: ${props => props.theme.colors.button.text};
`;
