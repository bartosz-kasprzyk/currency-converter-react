import { useState } from "react";
import { currencies } from "../currencies.js";
import Timer from "../Timer";
import { Calculator, Title, Loading, Error, CurrencyBar, Currency, CurrencySelector, AmountBar, Required, Amount, RequiredInfo, Button, Result, Footnote } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const ratesData = useRatesData();
    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("N/A");
    const [resultCurrency, setResultCurrency] = useState("");

    const calculateResult = (from, to, amount) => {
        const fromCurrency = Object.keys(ratesData.ratesData.currencyData).find(( currency ) => currency === from);
        const toCurrency = Object.keys(ratesData.ratesData.currencyData).find(( currency ) => currency === to);

        return amount * ratesData.ratesData.currencyData[fromCurrency].value / ratesData.ratesData.currencyData[toCurrency].value;
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
                {ratesData.ratesData.status === "loading" ? (
                    <Loading>
                        Sekundka... ⏱<br /> Ładuję kursy walut z <i>currencyapi.com</i>
                    </Loading>
                )
                    : ratesData.ratesData.status === "error" ? (
                        <Error>
                            Ups.... Coś poszło nie tak. 😔<br /> Spróbuj później.
                        </Error>
                    )
                        : (
                            <>
                                <CurrencyBar>
                                    <Currency>
                                        Mam:
                                        <CurrencySelector
                                            name="from"
                                            value={from}
                                            onChange={({ target }) => setFrom(target.value)}
                                        >
                                            {Object.keys(ratesData.ratesData.currencyData).map((currency) => (
                                                <option key={currency}>
                                                    {currency}
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
                                            {Object.keys(ratesData.ratesData.currencyData).map((currency) => (
                                                <option key={currency}>
                                                    {currency}
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
                                <RequiredInfo>
                                    Pola wymagane oznaczone są *.
                                </RequiredInfo>
                            </>
                        )}
            </Calculator>
            <Button>Przelicz!</Button>
            <Result>
                <span>Kwota po przeliczeniu: </span>
                <strong>
                    {typeof (result) === "string" ? result : Number(result).toFixed(2)}&nbsp;{resultCurrency}
                </strong>
            </Result>
            {ratesData.ratesData.status === "success" ? (
                <Footnote>
                    Kursy walut pobrane ze strony <i>currencyapi.com</i>, aktualne na dzień {new Date(ratesData.ratesData.date).toLocaleDateString()}
                </Footnote>
            ) : (
                ""
            )}
        </form >
    );
};

export default Form;