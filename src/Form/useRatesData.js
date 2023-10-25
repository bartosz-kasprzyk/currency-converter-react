import axios from "axios";
import { useState, useEffect } from "react";

const url =  "https://api.currencyapi.com/v3/latest?apikey=cur_live_ejB20kvkIdg0wTo3l29oj0InCRhWoy2aQCtk1X2P&currencies=EUR%2CUSD%2CCAD%2CPLN%2CJPY%2CGBP%2CAUD%2CCHF%2CHKD%2CNZD&base_currency=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: "",
        currencyData: [],
    });

    useEffect(() => {
        const rates = async () => {
            try {
                const response = await axios.get(url);
                setRatesData({
                    status: "success",
                    date: response.data.meta.last_updated_at,
                    currencyData: response.data.data,
                });
            } catch (error) {
                setRatesData({
                    status: "error"
                });
                console.log(error);
            }
        }

        setTimeout(rates, 1000);
    }, []);

    return { ratesData };
};