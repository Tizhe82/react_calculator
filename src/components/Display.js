import React, { useContext } from 'react';
import { ContextCalc } from '../context/ContextCalc';

const Display = () => {
  const { calc } = useContext(ContextCalc);

  const displayContent = calc.num ? calc.num : (calc.res + calc.sign);
  const displayResult = calc.isEqualClicked ? calc.res : displayContent;

  return (
    <div className="display">
      {displayResult}
    </div>
  );
};

export default Display;
