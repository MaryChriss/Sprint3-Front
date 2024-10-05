import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import RightSection from "../../components/RightSection/RightSection";
import { StyledLeftSectionContainer, StyledName, StyledTitulo } from "./Login.style";

const App: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <StyledName onClick={handleClick}>Brain Drive</StyledName>
            <StyledLeftSectionContainer>
                <div>
                    <StyledTitulo>Bem-vindo ao Brain Drive! <br />
                        Seu assistente virtual para <br />
                        diagnóstico automotivo.
                    </StyledTitulo>
                    <p>
                        Descubra problemas no seu veículo com facilidade e siga as <br />
                        recomendações para mantê-lo em perfeito estado. Faça login <br />
                        para começar!
                    </p>
                </div>

                <RightSection />
            </StyledLeftSectionContainer>
            <Footer />
        </>
    );
};

export default App;
