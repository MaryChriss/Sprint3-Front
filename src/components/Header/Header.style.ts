import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    background-color: #fbfbfb;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`

export const StyledRotas = styled.nav `
    display: flex;
    margin-right: 5rem;
`;

export const StyledWrapperMenu = styled.ul `
    list-style-type: none;
    display: flex;
    gap: 2rem;
    width: 100%;
`;

export const StyledMenuItem = styled.li `
    width: 5rem;
    height: 4rem;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.9rem;

`;

export const StyledLogin = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 20px;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;

    &:hover {
        color: #00a1fc;
    }
`;