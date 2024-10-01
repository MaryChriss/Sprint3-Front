// Equipe.js
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { BotaoRedeSocial } from "../../components/BotaoRedeSocial/BotaoRedeSocial";
import { Layout } from "../../components/Layout/Layout";
import { StyledColaborador, StyledColaboradores, StyledContext, StyledDetails2, StyledEquipe, StyledInfos, StyledRedes, } from "./Equipe.style";

export default function Equipe() {
    return (
        <Layout>

            <StyledEquipe>

                <StyledInfos>
                    <StyledDetails2>
                        <img src="/public/TopicsPequen.png" alt="" />
                    </StyledDetails2>
                    <StyledContext>
                        <h1>Nossa Equipe:</h1>
                        <p>
                            Conheça as pessoas por trás do nosso projeto. Nossa equipe está dedicada a oferecer
                            <br />
                            o melhor serviço e suporte para garantir que você tenha a melhor experiência
                            possível.
                        </p>
                    </StyledContext>
                </StyledInfos>

                <StyledColaboradores>

                    <StyledColaborador>
                        <img src="/public/mariFoto.jpg" alt="" className="imagem" />
                        <p>Mariana Christina <br />
                            RM: 554773
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/MaryChriss"
                                label="GitHub"

                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>
                        <img src="/public/henriqueFoto.jpeg" alt="" className="imagem" />
                        <p>Henrique Maciel <br />
                            RM: 556480
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/Maciel0123"
                                label="GitHub"
                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/henrique-maciel-a70140312/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>
                        <img src="/public/gabiFoto.jpg" alt="" className="imagem" />
                        <p>Gabriela Moguinho <br />
                            RM: 556143
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/gabrielamoguinho"
                                label="GitHub"
                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/gabriela-moguinho-a18762265/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                </StyledColaboradores>
            </StyledEquipe>

        </Layout>
    );
}
