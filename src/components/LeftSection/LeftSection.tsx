import RightSection from "../RightSection/RightSection";
import { StyledLeftSectionContainer, StyledTitulo } from "./LeftSection.style";

const LeftSection: React.FC = () => {
    return (
    <StyledLeftSectionContainer>

        <div>
            <StyledTitulo>Bem-vindo ao Brain Drive! <br />
                Seu assistente virtual para  <br />
                diagnóstico automotivo.
            </StyledTitulo>

            <p>
            Descubra problemas no seu veículo com facilidade e siga as <br />
            recomendações para mantê-lo em perfeito estado. Faça login <br />
            para começar!
            </p>
        </div>

        <RightSection/>
    </StyledLeftSectionContainer>
);
};

export default LeftSection;
