import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import styles from '../Styles/calculator.module.css';

function Calculator() {
  const [obj, setObj] = useState({ total: 0, next: null, operation: null });

  const handleChange = (e) => {
    const buttonName = e.target.textContent;
    const result = calculate(obj, buttonName);
    setObj(result);
    return result;
  };

  const { total, next, operation } = obj;

  return (
    <div className={styles.container}>
      <h2>Think You`re Smart</h2>
      <div className={styles.model}>
        <div className={styles.result}>
          {total}
          {operation}
          {next}
        </div>
        <div className="calc-row">
          <Buttons label="AC" className={styles.btn} onClick={handleChange} />
          <Buttons label="+/-" className={styles.btn} onClick={handleChange} />
          <Buttons label="%" className={styles.btn} onClick={handleChange} />
          <Buttons label="÷" className={styles.operation} onClick={handleChange} />
        </div>
        <div className="calc-row">
          <Buttons label="7" className={styles.btn} onClick={handleChange} />
          <Buttons label="8" className={styles.btn} onClick={handleChange} />
          <Buttons label="9" className={styles.btn} onClick={handleChange} />
          <Buttons label="x" className={styles.operation} onClick={handleChange} />
        </div>
        <div className="calc-row">
          <Buttons label="4" className={styles.btn} onClick={handleChange} />
          <Buttons label="5" className={styles.btn} onClick={handleChange} />
          <Buttons label="6" className={styles.btn} onClick={handleChange} />
          <Buttons label="-" className={styles.operation} onClick={handleChange} />
        </div>
        <div className="calc-row">
          <Buttons label="1" className={styles.btn} onClick={handleChange} />
          <Buttons label="2" className={styles.btn} onClick={handleChange} />
          <Buttons label="3" className={styles.btn} onClick={handleChange} />
          <Buttons label="+" className={styles.operation} onClick={handleChange} />
        </div>
        <div className="calc-row">
          <Buttons label="0" className={styles.zero} onClick={handleChange} />
          <Buttons label="." className={styles.btn} onClick={handleChange} />
          <Buttons label="=" className={styles.operation} onClick={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
