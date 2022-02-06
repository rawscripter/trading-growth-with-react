import React, { createContext, useEffect, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {

    const currencyFunds =
    {
        USD: [90000, 60000, 40000, 14000],
        GBP: [80000, 36000, 50000, 12000],
        EURO: [70000, 40000, 30000, 10000],
    }

    const [currency, setCurrency] = useState('GBP');
    const [currencySymbol, setCurrencySymbol] = useState('$');
    const [selectedFund, setSelectedFund] = useState(currencyFunds.USD[0]);
    const [foundLevel, setFoundLevel] = useState(8);



    useEffect(() => {
        if (currencyFunds[currency][0] === selectedFund) {
            setFoundLevel(8);
        } else {
            setFoundLevel(7);
        }
        // eslint-disable-next-line
    }, [selectedFund]);


    useEffect(() => {
        setSelectedFund(currencyFunds[currency][0]);
        switch (currency) {
            case 'USD':
                setCurrencySymbol('$');
                break;
            case 'GBP':
                setCurrencySymbol('£');
                break;
            case 'EURO':
                setCurrencySymbol('€');
                break;
            default:
                setCurrencySymbol('$');
                break;
        }
    }, [currency]);



    return (
        <CurrencyContext.Provider value={{
            currencyFunds,
            currency,
            currencySymbol,
            setCurrency,
            setSelectedFund,
            selectedFund,
            foundLevel
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}
