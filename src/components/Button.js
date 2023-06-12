import React, { useContext } from 'react';
import { ContextCalc } from '../context/ContextCalc';

const getStyleName = (btn) => {
  const className = {
    '=': 'equals',
    'C': 'clear',
    '+': 'opt',
    '-': 'opt',
    '*': 'opt',
    '/': 'opt',
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, calcSet } = useContext(ContextCalc);

  const resetClick = () => {
    calcSet({ sign: '', num: 0, res: 0 });
  };

  const handleClickButton = () => {
    if (['+', '-', '*', '/'].includes(value)) {
      calcSet({
        ...calc,
        sign: value,
      });
    } else {
      const numberString = value.toString();
      let valueNumber;
      if (numberString === '0' && calc.num === 0) {
        valueNumber = '0';
      } else {
        valueNumber = Number(calc.num + numberString);
      }
      calcSet({
        ...calc,
        num: valueNumber,
      });
    }
  };

  const clickSign = () => {
    calcSet({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const clickEquals = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '*': (a, b) => a * b,
          '/': (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      calcSet({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      });
    }
  };

  const handleBtnClick = () => {
    const results = {
      'C': resetClick,
      '+': clickSign,
      '-': clickSign,
      '*': clickSign,
      '/': clickSign,
      '=': clickEquals,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

export default Button;
