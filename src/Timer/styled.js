import styled from "styled-components";

export const Clock = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr auto;
    justify-items: end;
    font-family: 'Martian Mono', monospace;
    font-size: 10px;
    margin: -15px 0 35px 5px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        justify-content: end;
        margin: -10px 0 35px 5px;
    }

    @media (max-width: 400px) {
        margin: -0px -5px 35px 5px;
    }
`

