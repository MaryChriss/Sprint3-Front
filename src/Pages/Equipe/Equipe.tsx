import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { Layout } from "../../components/Layout/Layout";
import { StyledColaborador, StyledColaboradores, StyledContext, StyledDetails2, StyledEquipe, StyledInfos, StyledMeios, StyledRedes } from "./Equipe.style";

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
                            Conheça as pessoas por trás do nosso projeto. Nossa equipe está dedicada a oferecer <br />
                            o melhor serviço e suporte para garantir que você tenha a melhor experiência possível.
                        </p>
                    </StyledContext>

                </StyledInfos>

                <StyledColaboradores>

                    <StyledColaborador>

                        <img src="/public/mariFoto.jpg" alt="" className="imagem" />
                        <p>Mariana Christina</p>

                        <StyledRedes>

                            <StyledMeios>
                                <BiLogoGithub />
                                <a href="https://github.com/MaryChriss">GitHub</a>
                            </StyledMeios>

                            <StyledMeios>
                                <BiLogoLinkedinSquare size="2rem"/>
                                <a href="https://www.linkedin.com/in/mariana-fernandes-92690425a/">Linkedin</a>
                            </StyledMeios>

                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>

                        <img src="/public/henriqueFoto.png" alt="" className="imagem" />
                        <p>Henrique Maciel</p>

                        <StyledRedes>

                            <StyledMeios>
                                <BiLogoGithub />
                                <a href="https://github.com/Maciel0123">GitHub</a>
                            </StyledMeios>

                            <StyledMeios>
                                <BiLogoLinkedinSquare size="2rem"/>
                                <a href="https://www.linkedin.com/in/henrique-maciel-a70140312/">Linkedin</a>
                            </StyledMeios>

                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>

                        <img src="/public/gabiFoto.jpg" alt="" className="imagem" />
                        <p>Gabriela Moguinho</p>

                        <StyledRedes>

                            <StyledMeios>
                                <BiLogoGithub />
                                <a href="https://github.com/gabrielamoguinho">GitHub</a>
                            </StyledMeios>

                            <StyledMeios>
                                <BiLogoLinkedinSquare size="2rem"/>
                                <a href="https://www.linkedin.com/in/gabriela-moguinho-a18762265/">Linkedin</a>
                            </StyledMeios>

                        </StyledRedes>
                    </StyledColaborador>
                </StyledColaboradores>
            </StyledEquipe>

        </Layout>
    )
}
