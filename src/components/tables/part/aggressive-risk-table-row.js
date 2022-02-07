import React, { useEffect } from 'react';

export const AggressiveTableRow = ({ totalCapital, level, totalLevels, currencySymbol }) => {

    const [fundingBalance, setFundingBalance] = React.useState(0);

    useEffect(() => {
        let newBalance = 0;
        if (level === 1) {
            newBalance = totalCapital * 0.25;
        } else if (level === 2) {
            newBalance = totalCapital * 1;
        } else if (level === 3) {
            newBalance = totalCapital * 2;
        } else if (level === 4) {
            newBalance = totalCapital * 4;
        } else if (level === 5) {
            newBalance = totalCapital * 8;
        } else if (level === 6) {
            newBalance = totalCapital * 16;
        } else if (level === 7) {
            newBalance = totalCapital * 32;
        } else if (level === 8) {
            newBalance = totalCapital * 64;
        }
        setFundingBalance(newBalance);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCapital]);

    const calculateMaxLoss = (balance) => {
        return addCommnas(Math.round(balance * 0.05));
    }

    const calculateMileStone = (balance) => {
        if (totalLevels === level) return 'N/A';
        return addCommnas(Math.round(balance * 0.25));
    }
    const calculateMaxStopLoss = (balance) => {
        return 'Not required';
    }
    const addCommnas = (num) => {
        return currencySymbol + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calculateProfitSplit = (level) => {
        if (level === 1 || level === 2) {
            return "50/50";
        }
        if (level === 3 || level === 4) {
            return "60/40";
        }
        if (level === 5 || level === 6) {
            return "70/30";
        }
        if (level === 7 || level === 8) {
            return "80/20";
        }
    }
    return (
        <tr>
            <td>Level {level}</td>
            <td>{addCommnas(fundingBalance)}  </td>
            <td>{calculateMileStone(fundingBalance)}</td>
            <td>{calculateMaxLoss(fundingBalance)}</td>
            <td>1:30</td>
            <td>{calculateProfitSplit(level)}</td>
            <td><span className='fs-sm'>{calculateMaxStopLoss(fundingBalance)}</span></td>
        </tr>
    )
}

