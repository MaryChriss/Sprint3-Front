import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa"; 
import { Button, Input, InputContainer, InputIcon, Styledh1, SwitchLink } from "./FormLogin.style";

interface FormLoginProps {
    toggleForm: () => void;
    handleLogin: (cpf: string, password: string) => void;
    }

    const FormLogin: React.FC<FormLoginProps> = ({ toggleForm, handleLogin }) => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(cpf, password);
    };

    return (
        <>
        <Styledh1>Login:</Styledh1>

        <form onSubmit={handleSubmit}>
            <InputContainer>
            <InputIcon>
                <BiUser size="1.5rem" color="#00a1fc" />
            </InputIcon>
            <Input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />
            </InputContainer>

            <InputContainer>
            <InputIcon>
                <FaLock size="1.5rem" color="#00a1fc" />
            </InputIcon>
            <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </InputContainer>

            <div>
            <Button type="submit">Entrar</Button>
            </div>
        </form>

        <SwitchLink onClick={toggleForm}>É novo aqui? Cadastre-se</SwitchLink>
        </>
    );
};

export default FormLogin;
