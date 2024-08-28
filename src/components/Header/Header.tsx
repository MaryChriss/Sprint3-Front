import { Login } from "../Login/Login"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { Menu } from "../Menu/Menu"
import { StyledHeader } from "./Header.style"

export const Header =() => {
    return (
        <>
        <StyledHeader>
            <LogoPorto />
            <Menu />
            <Login />
        </StyledHeader>
        </>
    )
}