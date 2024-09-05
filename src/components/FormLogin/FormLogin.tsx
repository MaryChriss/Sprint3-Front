import React from "react";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa"; 
import { Button, Input, InputContainer, InputIcon, Styledh1, SwitchLink } from "./FormLogin.style";


interface FormLoginProps {
    toggleForm: () => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ toggleForm }) => {
    return (
        <>
        <Styledh1>Login:</Styledh1>

        <InputContainer>
            <InputIcon>
            <BiUser size="1.5rem" color="#00a1fc"/>
            </InputIcon>
            <Input type="text" placeholder="CPF" />
        </InputContainer>

        <InputContainer>
            <InputIcon>
            <FaLock size="1.5rem" color="#00a1fc"/>
            </InputIcon>
            <Input type="password" placeholder="Senha" />
        </InputContainer>

        <div>
            <Button>Entrar</Button>
        </div>

        <SwitchLink onClick={toggleForm}>É novo aqui? Cadastre-se</SwitchLink>
        </>
    );
};

export default FormLogin;
