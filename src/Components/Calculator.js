import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

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
    <div className="container">
      <h1>Think You`re Smart</h1>
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="calc-row">
        <Buttons label="AC" className="btn-normal" onClick={handleChange} />
        <Buttons label="+/-" className="btn-normal" onClick={handleChange} />
        <Buttons label="%" className="btn-normal" onClick={handleChange} />
        <Buttons label="÷" className="btn-special" onClick={handleChange} />
      </div>
      <div className="calc-row">
        <Buttons label="7" className="btn-normal" onClick={handleChange} />
        <Buttons label="8" className="btn-normal" onClick={handleChange} />
        <Buttons label="9" className="btn-normal" onClick={handleChange} />
        <Buttons label="x" className="btn-special" onClick={handleChange} />
      </div>
      <div className="calc-row">
        <Buttons label="4" className="btn-normal" onClick={handleChange} />
        <Buttons label="5" className="btn-normal" onClick={handleChange} />
        <Buttons label="6" className="btn-normal" onClick={handleChange} />
        <Buttons label="-" className="btn-special" onClick={handleChange} />
      </div>
      <div className="calc-row">
        <Buttons label="1" className="btn-normal" onClick={handleChange} />
        <Buttons label="2" className="btn-normal" onClick={handleChange} />
        <Buttons label="3" className="btn-normal" onClick={handleChange} />
        <Buttons label="+" className="btn-special" onClick={handleChange} />
      </div>
      <div className="calc-row">
        <Buttons label="0" className="btn-double" onClick={handleChange} />
        <Buttons label="." className="btn-normal" onClick={handleChange} />
        <Buttons label="=" className="btn-special" onClick={handleChange} />
      </div>
    </div>
  );
}

export default Calculator;
