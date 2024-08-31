import styled from "styled-components";

export const StyledHome = styled.section`
    margin-top: 2rem;
`

export const StyledDescription = styled.div`
    display: flex;
`

export const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 17rem;
    margin-top: 7rem;

    & h1 {
        font-weight: 1000;
        font-size: 2rem;
    }

    & p {
        margin-top: 1rem;
        font-size: 1.3rem;
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
`

export const StyledSub = styled.div`
    margin-top: 6rem;
    margin-left: 4rem;
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
`

export const StyledStepsContainer = styled.div`
    display: flex;
    margin: 1rem;
    min-width: 300px;
`

export const StyledFirstStep = styled.div`
        display: flex;
        flex-direction: row;
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
`

export const StyledSecondStep = styled.div`
        display: flex;
        flex-direction: row;
`

export const StyledThirdStep = styled.div`
    display: flex;
    flex-direction: row;

    & h3 {
        margin-bottom: 3.7rem;
    }
`
