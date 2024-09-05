import React from "react";
import { Button, Input, SwitchLink } from "../FormLogin/FormLogin.style";
import { Styledh1Cadas } from "./FormCadastro.style";


interface FormSignupProps {
    toggleForm: () => void;
}

const FormSignup: React.FC<FormSignupProps> = ({ toggleForm }) => {
    return (
        <>
        <Styledh1Cadas>Cadastre-se:</Styledh1Cadas>
        <Input type="text" placeholder="Nome Completo" />
        <Input type="text" placeholder="CPF" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a senha" />
        <Button>Cadastrar</Button>
        <SwitchLink onClick={toggleForm}>Já tem uma conta? Login</SwitchLink>
        </>
    );
};

export default FormSignup;
