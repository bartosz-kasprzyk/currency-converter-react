import { Clock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Timer = () => {
    const {
        localeDate1,
        localeDate2,
    } = useCurrentDate();

    return (
        <Clock>
            <span>
                Dzisiaj jest {localeDate1},
            </span>
            <span>
                {localeDate2}
            </span>
        </Clock>
    );
};

export default Timer;