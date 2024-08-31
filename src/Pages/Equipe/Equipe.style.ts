import styled from "styled-components";

export const StyledEquipe = styled.section`
    background-color: #F1F8FF;
`

export const StyledInfos = styled.div`
    display: flex;
`

export const StyledDetails2 = styled.div`
        height: 25rem;
        width: 17rem;

        & img {
            height: 30rem;
            width: 15rem;
            margin-left: 2rem;
        }
`

export const StyledContext = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;

    & h1 {
        margin-top: 6rem;
        font-size: 2.0rem;
    }

    & p {
        margin-top: 1rem;
        font-size: 1.2rem;
        margin-left: -1.5rem;
    }
`

export const StyledColaboradores = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
`

export const StyledColaborador = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0rem;

    & .imagem {
        width: 11.5rem;
        height: 11.5rem;
        border-radius: 10rem;
        border: white 5px solid;
    }
`

export const StyledRedes = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2.5rem;
        gap: 2rem;
`
export const StyledMeios = styled.div`
        background-color: white;
        border-radius: 1.2rem;
        border: lightgray 1px solid;
        padding: 0.5rem;
        height: 3rem;
        width: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        

        & a {
            font-size: 1.25rem;
            font-weight: bold;
            color: black;
        }
`