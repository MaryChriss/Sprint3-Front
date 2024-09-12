import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";
import Input from "../../components/Input/Input";
import { StyledBotao, StyledContato, Styledforms, StyledformSection, StyledInfosPessoais, StyledQuestions, StyledTextQuestions } from "./Contato.style";

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mgvwbonj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.nome,
                    email: formData.email,
                    phone: formData.telefone,
                    message: formData.mensagem
                })
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
            } else {
                alert('Erro ao enviar a mensagem. Por favor, tente novamente.'); // Alerta para erro de resposta
            }
        } catch (error) {
            console.error("Erro:", error); // Log do erro no console
            alert('Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.'); // Alerta de erro
        }
    };

    return (
        <Layout>
            <StyledContato>
                <StyledQuestions>
                    <img src="/public/carroFuturista.png" alt="Carro Futurista" />

                    <StyledTextQuestions>
                        <h1>Dúvidas?</h1>
                        <p>
                            Estamos aqui para ajudar com qualquer dúvida <br />
                            que você possa ter. <br />
                            Preencha o formulário abaixo e nossa equipe entrará <br />
                            em contato com você o mais breve possível.
                        </p>
                    </StyledTextQuestions>
                </StyledQuestions>

                <div>
                    <Styledforms>
                        <form onSubmit={handleSubmit}>
                            <StyledformSection>
                                <StyledInfosPessoais>
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
                                </StyledInfosPessoais>

                                <Input
                                    label="Mensagem*:"
                                    type="text"
                                    name="mensagem"
                                    value={formData.mensagem}
                                    onChange={handleInputChange}
                                    required
                                    textarea={true}
                                />
                            </StyledformSection>

                            <StyledBotao>
                                <button type="submit" className="btn">Enviar</button>
                            </StyledBotao>
                        </form>
                    </Styledforms>
                </div>
            </StyledContato>
        </Layout>
    );
}
