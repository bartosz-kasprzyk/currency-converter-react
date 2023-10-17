import styled from "styled-components";

export const Clock = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr auto;
    justify-items: end;
    font-family: 'Martian Mono', monospace;
    font-size: 10px;
    margin: -15px 0 35px 5px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        justify-content: end;
        margin: -10px 0 35px 5px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin: 0 -5px 35px 5px;
    }
`

