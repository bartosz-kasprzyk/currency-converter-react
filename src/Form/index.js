import { useState } from "react";
import { currencies } from "../currencies.js";
import "./style.css";

const Form = () => {
    const EURtoPLN = 4.47;
    const EURtoUSD = 1.08;
    const EURtoEUR = 1;

    const USDtoPLN = 4.14;
    const USDtoEUR = 0.93;
    const USDtoUSD = 1;

    const PLNtoEUR = 0.22;
    const PLNtoUSD = 0.24;
    const PLNtoPLN = 1;

    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("N/A");
    const [resultCurrency, setResultCurrency] = useState("");

    const calculateResult = (from, to, amount) => {
        if (from === "EUR") {
            if (to === "PLN") {
                return amount * EURtoPLN;
            } else if (to === "USD") {
                return amount * EURtoUSD;
            } else {
                return amount * EURtoEUR;
            }
        } else if (from === "USD") {
            if (to === "PLN") {
                return amount * USDtoPLN;
            } else if (to === "EUR") {
                return amount * USDtoEUR;
            } else {
                return amount * USDtoUSD;
            }
        } else {
            if (to === "EUR") {
                return amount * PLNtoEUR;
            } else if (to === "USD") {
                return amount * PLNtoUSD;
            } else {
                return amount * PLNtoPLN;
            }
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(calculateResult(from, to, amount));
        setResultCurrency(to);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__calculator">
                <legend className="form__title">Kalkulator walut</legend>
                <div className="form__currencyBar">
                    <label className="form__currency">
                        Mam:
                        <select
                            className="form__currencySelector"
                            name="from"
                            value={from}
                            onChange={({ target }) => setFrom(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id}>
                                    {currency.id}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="form__currency">
                        Chcę:
                        <select
                            className="form__currencySelector"
                            name="to"
                            value={to}
                            onChange={({ target }) => setTo(target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id}>
                                    {currency.id}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <label className="form__amountBar">
                    <span>
                        Kwota, którą chcę wymienić<span className="form__required">*</span>:
                    </span>
                    <input
                        type="number"
                        className="form__amount"
                        name="amount"
                        required
                        min="1"
                        value={amount}
                        placeholder="Podaj kwotę"
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
                <div className="form__footnote">
                    Pola wymagane oznaczone są *.
                </div>
            </fieldset>
            <button className="form__button">Przelicz!</button>
            <div className="form__result">
                <span>Kwota po przeliczeniu: </span>
                <strong>
                    {typeof (result) === "string" ? result : Number(result).toFixed(2)} {resultCurrency}
                </strong>
            </div>
        </form >
    );
};

export default Form;