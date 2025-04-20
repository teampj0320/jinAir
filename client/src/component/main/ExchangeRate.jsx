import React, { useEffect, useState } from 'react';

export default function ExchangeRate () {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/krw.json')
      .then(res => res.json())
      .then(data => {
        const baseAmount = 1000;
        const filtered = {
          usd: data.krw.usd * baseAmount,
          eur: data.krw.eur * baseAmount,
          jpy: data.krw.jpy * baseAmount,
          date: data.date,
          base: 'KRW',
          amount: baseAmount
        };
        setRates(filtered);
      })
      .catch(err => console.error('환율 데이터 오류:', err));
  }, []);

  return (
    <div className="exchange-all-box">
      <h2 className="">{rates?.date} KRW 1,000원 기준 환율</h2>
      {rates ? (
        <ul className="">
          <li>USD : {rates.usd.toFixed(2)}달러</li>
          <li>EUR : {rates.eur.toFixed(2)}유로</li>
          <li>JPY : {rates.jpy.toFixed(1)}엔</li>
        </ul>
      ) : (
        <p>환율 불러오는 중...</p>
      )}
    </div>
  );
};

