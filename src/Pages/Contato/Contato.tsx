import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { StyledContato } from "./Contato.style";

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validarFormulario = () => {
        alert("Mensagem enviada com sucesso");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validarFormulario();
    };

    return (
        <Layout>
            <StyledContato>
                <div className="questions">
                    <img src="/public/carroFuturista.png" alt="Carro Futurista" />

                    <div className="textQuestions">
                        <h1>Dúvidas?</h1>
                        <p>
                            Estamos aqui para ajudar com qualquer dúvida <br />
                            que você possa ter. <br />
                            Preencha o formulário abaixo e nossa equipe entrará <br />
                            em contato com você o mais breve possível.
                        </p>
                    </div>
                </div>

                <div className="conteudo-forms">
                    <div className="forms">
                        <form onSubmit={handleSubmit}>
                            <div className="form-sections">
                                <div className="infos-pessoais">
                                    <Input
                                        label="Nome*:"
                                        type="text"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <Input
                                        label="Email*:"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />

                                    <Input
                                        label="Telefone:"
                                        type="tel"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mensagem">
                                    <Input
                                        label="Mensagem*:"
                                        type="text"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                        required
                                        textarea={true} // Define que será um textarea
                                    />
                                </div>
                            </div>

                            <div className="botao">
                                <button type="submit" className="btn">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </StyledContato>
        </Layout>
    );
}
