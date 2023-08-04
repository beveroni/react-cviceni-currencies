import React from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

const Rate = ({ from }) => {
  const exchangeRate = currencies[from].CZK;
  return (
    <div className="rate">
      <div className="rate__currency">1 {from} </div>
      <div>=</div>
      <div className="rate__value">{exchangeRate} CZK</div>
    </div>
  );
};

export default Rate;
