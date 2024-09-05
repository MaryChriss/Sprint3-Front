import React, { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import { StyledContentBox, StyledRightSectionContainer } from "./RightSection.style";
import FormCadastro from "../FormCadastro/FormCadastro";


const RightSection: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <StyledRightSectionContainer>
            <StyledContentBox>
                {isLogin ? (
                <FormLogin toggleForm={toggleForm} />
                ) : (
                <FormCadastro toggleForm={toggleForm} />
                )}
            </StyledContentBox>
        </StyledRightSectionContainer>
    );
};

export default RightSection;
