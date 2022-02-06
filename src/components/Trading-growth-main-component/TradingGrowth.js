import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from '../styles/Header.module.css'
import { CurrencyContext } from '../services/currency/currency.context';

const TradingGrowth = () => {
    const { currency, currencyFunds, setSelectedFund, selectedFund } = React.useContext(CurrencyContext);
    const thousandToK = (num) => {
        return num > 999 ? (num / 1000).toFixed(0) + 'K' : num;
    }
    return (
        <div className='trading-growth-schedule my-5'>
            <div className="container">
                <div className="title text-center mt-5">
                    <h2 className='mb-5'>Trading Growth Schedule</h2>
                </div>
                <Navigation ></Navigation>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="sidebar mt-3">
                            {currencyFunds[currency].map((fund, index) => {
                                return (
                                    <div
                                        className={selectedFund === fund ? 'trader-menu active-fund' : 'trader-menu'}
                                        onClick={() => {
                                            setSelectedFund(fund)
                                        }
                                        }
                                        key={index} >
                                        <p className='lead m-0'>
                                            <strong>{thousandToK(fund)} RISK MANAGER <br /> Found Trader</strong>
                                        </p>
                                    </div>
                                )
                            }
                            )}</div>
                    </div>
                    <div className="col-md-9">
                        <div className="risk-table-view">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TradingGrowth;
