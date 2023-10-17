import { useState } from "react";
import { currencies } from "../currencies.js";
import Timer from "../Timer";
import { Calculator, Title, CurrencyBar, Currency, CurrencySelector, AmountBar, Required, Amount, Footnote, Button, Result } from "./styled";

const Form = () => {
    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("N/A");
    const [resultCurrency, setResultCurrency] = useState("");

    const calculateResult = (from, to, amount) => {
        const fromCurrency = currencies.find(({ id }) => id === from);
        const toCurrency = currencies.find(({ id }) => id === to);
        
        return amount * fromCurrency.rate / toCurrency.rate;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(calculateResult(from, to, amount));
        setResultCurrency(to);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Calculator>
                <Title>Kalkulator walut</Title>
                <Timer />
                <CurrencyBar>
                    <Currency>
                        Mam:
                        <CurrencySelector
                            name="from"
                            value={from}
                            onChange={({ target }) => setFrom(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id}>
                                    {currency.id}
                                </option>
                            ))}
                        </CurrencySelector>
                    </Currency>
                    <Currency>
                        Chcę:
                        <CurrencySelector
                            name="to"
                            value={to}
                            onChange={({ target }) => setTo(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id}>
                                    {currency.id}
                                </option>
                            ))}
                        </CurrencySelector>
                    </Currency>
                </CurrencyBar>
                <AmountBar>
                    <span>
                        Kwota, którą chcę wymienić<Required>*</Required>:
                    </span>
                    <Amount
                        type="number"
                        name="amount"
                        required
                        min="1"
                        value={amount}
                        placeholder="Podaj kwotę"
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </AmountBar>
                <Footnote>
                    Pola wymagane oznaczone są *.
                </Footnote>
            </Calculator>
            <Button>Przelicz!</Button>
            <Result>
                <span>Kwota po przeliczeniu: </span>
                <strong>
                    {typeof (result) === "string" ? result : Number(result).toFixed(2)} {resultCurrency}
                </strong>
            </Result>
        </form >
    );
};

export default Form;