import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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

    return { date, localeDate1, localeDate2 };
};


