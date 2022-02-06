import React, { createContext, useEffect, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('USD');
    const [currencySymbol, setCurrencySymbol] = useState('$');

    //TODO : IF CLICKS ASKS TO CHANGE CURRENCY RATES CHANGE FROM HERE
    const [usdToGbp, setUsdToGbp] = useState(0.74);
    const [usdToEuro, setUsdToEuro] = useState(0.87);

    const selectedCurrency = (currency) => {
        setCurrency(currency);
    }

    useEffect(() => {
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

    const convertToCurrency = (value, decimal = 0, showCurrency = true,) => {
        // remove $ sign from value
        const valueWithoutSign = value.replace('$', '');
        const valueWithoutComma = valueWithoutSign.replace(',', '');

        let amount = parseFloat(valueWithoutComma);
        if (isNaN(amount)) {
            return 'N/A';
        }

        let newAmount = 0;
        if (currency === 'USD') {
            newAmount = amount;
        } else if (currency === 'GBP') {
            newAmount = amount * usdToGbp;
        } else if (currency === 'EURO') {
            newAmount = amount * usdToEuro;
        }

        if (decimal > 0) {
            newAmount = newAmount.toFixed(decimal);
        } else {
            newAmount = newAmount.toFixed(0);
        }


        if (showCurrency) {
            return `${currencySymbol}${newAmount}`;
        } else {
            return newAmount;
        }
    }

    return (
        <CurrencyContext.Provider value={{ currency, currencySymbol, convertToCurrency, selectedCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}
