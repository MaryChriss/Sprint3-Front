import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Manu.style";

export const Menu = () => {
    return (
        <StyledRotas>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHome size="1rem" color="#00a1fc" />
                    <Link to="/">Home</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <BsPeopleFill />
                    <Link to="/equipe">Equipe</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <Link to="/contato">Contato</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledRotas>
    )
}