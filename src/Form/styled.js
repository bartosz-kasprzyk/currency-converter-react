import styled from "styled-components";

export const Calculator = styled.fieldset`
    max-width: 600px;
    margin: 50px auto 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background: hsl(0, 0%, 100%, 90%);
`

export const Title = styled.legend`
    border: 1px solid hsl(0, 0%, 0%);
    background-color: hsl(167, 90%, 21%);
    border-radius: 5px;
    color: hsl(0, 0%, 93%);
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
    color: hsl(0, 59%, 46%);
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
    color: hsl(0, 59%, 46%);
`

export const Button = styled.button`
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 10px auto;
    padding: 10px;
    background-color: hsl(167, 90%, 21%);
    color: hsl(0, 0%, 93%);
    border-radius: 5px;

    &:hover {
        background-color: hsl(167, 90%, 17%);
    }

    &:active {
        background-color: hsl(167, 90%, 13%);
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
