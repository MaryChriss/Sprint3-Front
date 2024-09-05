import { Layout } from "../../components/Layout/Layout";
import { useState } from "react";

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
            <section className="contato">
                <div className="questions">
                    <img src="/img/carroFuturista.png" alt="Carro Futurista" />

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

                                    <div className="campo">
                                        <label htmlFor="nome">Nome*:</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="campo">
                                        <label htmlFor="email">Email*:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="campo">
                                        <label htmlFor="telefone">Telefone:</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    
                                </div>

                                <div className="mensagem">
                                    <div>
                                        <label htmlFor="mensagem">Mensagem*:</label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="botao">
                                <button type="submit" className="btn">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
