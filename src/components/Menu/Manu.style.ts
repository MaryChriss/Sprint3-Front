import styled from "styled-components";

export const StyledRotas = styled.nav `
    display: flex;
    margin-right: 4rem;
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
    display: flex;
    align-items: center;
    justify-content: center;

    & a {
    font-weight: 600;
    font-size: 1rem;
}
`;

