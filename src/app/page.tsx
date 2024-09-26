'use client'
import { useState } from 'react';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<number | string>('');
  const [tipPercentage, setTipPercentage] = useState<number | string>('');
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateTip = () => {
    const bill = parseFloat(billAmount as string);
    const tip = parseFloat(tipPercentage as string);
    
    if (!isNaN(bill) && !isNaN(tip)) {
      const calculatedTip = (bill * tip) / 100;
      setTipAmount(calculatedTip);
      setTotalAmount(bill + calculatedTip);
    }
  };

  return (
    <div className="container">
      <h1>Tip Calculator</h1>

      <div className="input-group">
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter bill amount"
        />
      </div>

      <div className="input-group">
        <label htmlFor="tipPercentage">Tip Percentage</label>
        <input
          type="number"
          id="tipPercentage"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          placeholder="Enter tip percentage"
        />
      </div>

      <button className="calculate-btn" onClick={calculateTip}>
        Calculate Tip
      </button>

      <div className="result">
        <p>Tip Amount: {tipAmount ? `$${tipAmount.toFixed(2)}` : '-'}</p>
        <p>Total Amount: {totalAmount ? `$${totalAmount.toFixed(2)}` : '-'}</p>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} All Rights Reserved - Tip Calculator by Yemna Mehmood
      </footer>
    </div>
  );
}
