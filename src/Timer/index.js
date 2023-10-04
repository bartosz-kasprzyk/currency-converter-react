import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {
    const [date, setDate] = useState(new Date());
    const localeDate1 = date.toLocaleDateString(undefined, { weekday: "long" });
    const localeDate2 = date.toLocaleDateString(undefined, { day: "numeric", month: "long" }) + ", " + date.toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="form__date">
            <span>
                Dzisiaj jest {localeDate1},&nbsp;
            </span>
            <span>
                {localeDate2}&nbsp;
            </span>
        </div>
    );
};

export default Timer;