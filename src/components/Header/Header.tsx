import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { StyledHeader, StyledLink, StyledLogin, StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Header.style"
import { BsTelephone } from "react-icons/bs"

export const Header =() => {
    return (
        <>
        <StyledHeader>

            <LogoPorto />

                <StyledRotas>
                    <StyledWrapperMenu>

                        <StyledMenuItem>
                            <BiHome size="1.5rem" color="#00a1fc" />
                            <StyledLink to="/">Home</StyledLink>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BiGroup size="1.5rem" color="#00a1fc" />
                            <StyledLink to="/equipe">Equipe</StyledLink>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BsTelephone size="1.2rem" color="#00a1fc" />
                            <StyledLink to="/contato">Contato</StyledLink>
                        </StyledMenuItem>
                        
                    </StyledWrapperMenu>
                </StyledRotas>

                <StyledLogin>
                    <BiUserCircle size="1.5rem" color="#00a1fc" />
                    <StyledLink to="/login">Login</StyledLink>
                </StyledLogin>

        </StyledHeader>
        </>
    )
}