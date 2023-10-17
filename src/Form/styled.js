import styled from "styled-components";

export const Calculator = styled.fieldset`
    max-width: 600px;
    margin: 50px auto 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.canvasColor.transparent};
`

export const Title = styled.legend`
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    background-color: ${({theme}) => theme.colors.primaryColor.light};
    border-radius: 5px;
    color: ${({theme}) => theme.colors.canvasColor.transparent};
    padding: 10px 15px;
`

export const CurrencyBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px auto;
    text-align: center;
    max-width: 280px;
`

export const Currency = styled.label`
    padding: 10px;
    margin: auto;
`

export const CurrencySelector = styled.select`
    margin-left: 5px;
`

export const AmountBar = styled.label`
    display: grid;
    grid-template-columns: 1fr;
    padding: 10px;
    margin: 20px auto;
    justify-items: center;
`

export const Required = styled.span`
    color: ${({theme}) => theme.colors.attentionColor};
`

export const Amount = styled.input`
    margin-top: 5px;
    max-width: 250px;
    width: 100%;
    height: 40px;
`

export const Footnote = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    color: ${({theme}) => theme.colors.attentionColor};
`

export const Button = styled.button`
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 10px auto;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.primaryColor.light};
    color: ${({theme}) => theme.colors.canvasColor.transparent};;
    border-radius: 5px;

    &:hover {
        background-color: ${({theme}) => theme.colors.primaryColor.medium};
    }

    &:active {
        background-color: ${({theme}) => theme.colors.primaryColor.dark};
    }
`

export const Result = styled.div`
    padding: 10px;
    max-width: 600px;
    margin: 20px auto;
    border-width: 2px;
    border-style: groove;
    border-color: hsl(0, 0%, 75%);
    border-radius: 5px;
    background: hsl(0, 0%, 100%, 90%);
`
