import { Clock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Timer = () => {
    const {
        longNameOfWeekDay,
        dayWithMonth,
        numericTime
    } = useCurrentDate();

    return (
        <Clock>
            <span>
                Dzisiaj jest {longNameOfWeekDay},
            </span>
            <span>
                {dayWithMonth}, {numericTime}
            </span>
        </Clock>
    );
};

export default Timer;