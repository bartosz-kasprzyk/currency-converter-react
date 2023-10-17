import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());
    const longNameOfWeekDay = date.toLocaleDateString(undefined, { weekday: "long" });
    const dayWithMonth = date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
    const numericTime = date.toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric", second: "numeric" });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return { longNameOfWeekDay, dayWithMonth, numericTime };
};

