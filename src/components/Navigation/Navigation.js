import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import euroImg from '../../images/euro-icon-removebg-preview.png';
import gbpImg from '../../images/gbp-icon-removebg-preview.png';
import usdImg from '../../images/usd-icon-removebg-preview.png'
import classes from '../styles/Header.module.css';
import { CurrencyContext } from '../services/currency/currency.context';

const Navigation = () => {

    const { setCurrency, currency } = useContext(CurrencyContext);

    return (
        <div className="row">
            <div className="col-md-10 mx-auto mb-4">
                <div className="row">
                    <div className="col-lg-7">
                        <ul className='currency-menu'>
                            <h4><strong>Currency</strong></h4>
                            <li>
                                <NavLink className={currency === "GBP" ? 'active-link' : ''} to='' onClick={() => setCurrency('GBP')}>
                                    <img src={gbpImg} alt="" /> GBP
                                </NavLink>
                                <NavLink className={currency === "USD" ? 'active-link' : ''} onClick={() => setCurrency('USD')} to=''>
                                    <img src={usdImg} alt="" /> USD
                                </NavLink>
                                <NavLink className={currency === "EURO" ? 'active-link' : ''} to='' onClick={() => setCurrency('EURO')}>
                                    <img src={euroImg} alt="" /> EURO
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <ul className='growth-menu'>
                            <h4><strong>Low Risk</strong></h4>
                            <li>
                                <NavLink to='/' className={(navInfo) => navInfo.isActive ? 'active-link' : 'not-active'}>
                                    Low Risk
                                </NavLink>
                                <NavLink to='/aggresive' className={(navInfo) => navInfo.isActive ? 'active-link' : 'not-active'}>
                                    Aggressive
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;