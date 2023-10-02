import { useState, useEffect } from "react";
import { currencies } from "../currencies.js";
import "./style.css";

const Form = () => {

    const [from, setFrom] = useState("EUR");
    const [to, setTo] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("N/A");
    const [resultCurrency, setResultCurrency] = useState("");
    const [date, setDate] = useState(new Date());
    const dateOptions = { weekday: "long", day: "numeric", month: "long" };
    const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
    const localeDate = date.toLocaleDateString(undefined, dateOptions)+", "+date.toLocaleTimeString(undefined, timeOptions);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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
            <fieldset className="form__calculator">
                <legend className="form__title">Kalkulator walut</legend>
                <div className="form__date">
                    Dzisiaj jest {localeDate}
                </div>
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