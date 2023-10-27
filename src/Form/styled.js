import styled from "styled-components";

export const Calculator = styled.fieldset`
    max-width: 600px;
    margin: 50px auto 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white.transparent};
`;

export const Title = styled.legend`
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white.transparent};
    padding: 10px 15px;
`;

export const Loading = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white.transparent};
    color: ${({ theme }) => theme.colors.green};
    padding: 10px 15px;
`;

export const Error = styled.div`
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white.transparent};
    color: ${({ theme }) => theme.colors.red};
    padding: 10px 15px;
`;

export const CurrencyBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px auto;
    text-align: center;
    max-width: 300px;
`;

export const Currency = styled.label`
    padding: 10px;
    margin: auto;
`;

export const CurrencySelector = styled.select`
    margin-left: 5px;
`;

export const AmountBar = styled.label`
    display: grid;
    grid-template-columns: 1fr;
    padding: 10px;
    margin: 20px auto;
    justify-items: center;
`;

export const Required = styled.span`
    color: ${({ theme }) => theme.colors.red};
`;

export const Amount = styled.input`
    margin-top: 5px;
    max-width: 250px;
    width: 100%;
    height: 40px;
`;

export const RequiredInfo = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.red};
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 10px auto;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white.transparent};;
    border-radius: 5px;

    &:hover {
        filter: brightness(90%);
    }

    &:active {
        filter: brightness(80%);
    }
`;

export const Result = styled.div`
    padding: 10px;
    max-width: 600px;
    margin: 20px auto;
    border-width: 2px;
    border-style: groove;
    border-color: ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white.transparent};
`

export const Footnote = styled.div`
    padding: 10px;
    max-width: 600px;
    margin: 20px auto;
    font-size: 12px;
`;
