import styled from "styled-components";

export const StyledHome = styled.section`
    margin-top: 2rem;
`

export const StyledDescription = styled.div`
    display: flex;

    /* Mobile */
    @media(max-width: 599px) {
        display: flex;
        flex-direction: column;
    }
`

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15rem;
    margin-right: 10rem;
    margin-top: 7rem;

    & h1 {
        font-weight: 1000;
        font-size: 2rem;
    }

    & p {
        margin-top: 1rem;
        font-size: 1.3rem;
    }

    @media(max-width: 599px) {
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
        margin-top: 5rem;
        margin-right: 20px;

        & h1 {
            font-size: 20px;
            margin-bottom: 10px;
            margin-bottom: 0;
        }

        & p {
            margin-top: 0.5rem;
            font-size: 15px;
            margin-top: 1rem;
        }
    }
`

export const StyledImgPrinc = styled.div`
    position: relative;

    img.decoration1 {
        position: absolute;
        margin-left: 22rem;
        width: 8rem;
        height: 8rem;
    }

    @media(max-width: 599px) {

        img.fundo {
            margin-top: 2rem;
            margin-left: 10rem;
            margin-right: 2rem;
            height: 17rem;
            width: 17rem;
        }

        img.decoration1 {
            position: absolute;
            margin-left: 23.5rem;
            width: 6rem;
            height: 6rem;
        }
    }
`

export const StyledSub = styled.div`
    margin-top: 6rem;
    margin-left: 4rem;


    @media(max-width: 599px) {

    h2 {
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        margin-right: 4rem;
        margin-left: 2rem;
        margin-bottom: 2rem;
    }}
`

export const StyledStepByStep = styled.article`
    min-height: 10rem;
    margin: 0;
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-radius: 6rem;
    background-color: #dbe3ff;
    display: flex;
    justify-content: center;

    @media(max-width: 599px) {
        min-height: 45rem;
        min-width: 20rem;
        margin-top: 2rem;
        margin-right: 2rem;
        margin-left: 2rem;
        box-sizing: border-box;
        border-radius: 6rem;
        background-color: #dbe3ff;
        display: flex;
        justify-content: center;
        
        
    }
`

export const StyledStepsContainer = styled.div`
    display: flex;
    margin: 1rem;
    min-width: 300px;

    @media(max-width: 599px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        margin-left: 0rem;
    }
`

export const StyledFirstStep = styled.div`
        display: flex;
        flex-direction: row;

        @media(max-width: 599px) {
            display: flex;
            flex-direction: column;
            margin-top: 1.2rem;
            margin-right: 1rem;

            h3 {
                font-size: 1rem;
            }

            p {
            font-size: 0.9rem;
            }
        }
`

export const StyledSteps = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & img {
        width: 63px;
    }

    & p {
        width: 25rem;
        height: 5rem;
    }

    @media(max-width: 599px) {
        margin: 0;

        p{
            margin-top: 1rem;
        }

        h3 {
            margin-top: 1rem;
        }
    }
`

export const StyledSecondStep = styled.div`
        display: flex;
        flex-direction: row;

        @media(max-width: 599px) {
            display: flex;
        flex-direction: column;
        margin-top: 2.8rem;
        margin-bottom: 5rem;

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.9rem;
        }
        }
`

export const StyledThirdStep = styled.div`
    display: flex;
    flex-direction: row;

    h3 {
        margin-bottom: 3.7rem;
    }

    @media(max-width: 599px) {
        margin-top: -6rem;
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 1rem;
    }

    }
`
