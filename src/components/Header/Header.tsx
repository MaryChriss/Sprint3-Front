import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { StyledHeader, StyledLogin, StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Header.style"
import { Link } from "react-router-dom"
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
                            <Link to="/">Home</Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BiGroup size="1.5rem" color="#00a1fc" />
                            <Link to="/equipe">Equipe</Link>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BsTelephone size="1.2rem" color="#00a1fc" />
                            <Link to="/contato">Contato</Link>
                        </StyledMenuItem>
                        
                    </StyledWrapperMenu>
                </StyledRotas>

                <StyledLogin>
                    <BiUserCircle size="1.5rem" color="#00a1fc" />
                    <Link to="/login" style={{color : "black", fontWeight: 700}}>Login</Link>
                </StyledLogin>

        </StyledHeader>
        </>
    )
}