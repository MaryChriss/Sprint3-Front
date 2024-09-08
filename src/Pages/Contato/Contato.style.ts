import styled from "styled-components";

export const StyledContato = styled.div`
    margin-top: 1rem;
`

export const StyledQuestions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        margin-right: 5rem;
        height: 19rem;
        width: 30rem;
        margin-top: 4rem;
    }
`

export const StyledTextQuestions = styled.div`

    & h1 {
        margin-top: 1rem;
        text-align: center;
        font-size: 2.8rem;
    }

    & p {
        text-align: center;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`

export const Styledforms = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledformSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`

export const StyledInfosPessoais = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & .btn {
        font-size: 1rem;
        background-color: #4373B8;
        color: white;
        font-weight: bold;
        padding: 0.8rem;
        border-radius: 1rem;
    }
`