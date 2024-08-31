import { Layout } from "../../components/Layout/Layout";
import { StyledDetails2, StyledEquipe, StyledInfos } from "./Equipe.style";

export default function Equipe() {
    return (
        <Layout>
            <StyledEquipe>

                <StyledInfos>

                    <StyledDetails2>
                        <img src="../img/TopicsPequen.png" alt="" />
                    </StyledDetails2>

                    <div>
                        <h1>Nossa Equipe:</h1>

                        <p>
                            Conheça as pessoas por trás do nosso projeto. Nossa equipe está dedicada a oferecer <br />
                            o melhor serviço e suporte para garantir que você tenha a melhor experiência possível.
                        </p>
                    </div>

                </StyledInfos>

                <div>

                    <div>

                        <img src="../img/mariFoto.jpg" alt="" className="imagem" />
                        <p>Mariana Christina</p>

                        <div>

                            <div>
                                <a href="https://github.com/MaryChriss">GitHub</a>
                                <img src="../img/Github.png" alt="" />
                            </div>

                            <div>
                                <a href="https://www.linkedin.com/in/mariana-fernandes-92690425a/">Linkedin</a>
                                <img src="../img/Linkedin.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div>

                        <img src="../img/henriqueFoto.png" alt="" className="imagem" />
                        <p>Henrique Maciel</p>

                        <div>

                            <div>
                                <a href="https://github.com/Maciel0123">GitHub</a>
                                <img src="../img/Github.png" alt="" />
                            </div>

                            <div>
                                <a href="https://www.linkedin.com/in/henrique-maciel-a70140312/">Linkedin</a>
                                <img src="../img/Linkedin.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div>

                        <img src="../img/gabiFoto.jpg" alt="" className="imagem" />
                        <p>Gabriela Moguinho</p>

                        <div>

                            <div>
                                <a href="https://github.com/gabrielamoguinho">GitHub</a>
                                <img src="../img/Github.png" alt="" />
                            </div>

                            <div>
                                <a href="https://www.linkedin.com/in/gabriela-moguinho-a18762265/">Linkedin</a>
                                <img src="../img/Linkedin.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </StyledEquipe>

        </Layout>
    )
}
