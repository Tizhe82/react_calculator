import React, { useContext } from 'react';
import { ContextCalc } from '../context/ContextCalc';
import { Textfit } from 'react-textfit';

const Display = () => {
  const { calc } = useContext(ContextCalc);

  const displayContent = calc.num ? calc.num : (calc.res + calc.sign);
  const displayResult = calc.isEqualClicked ? calc.res : displayContent;

  return (
    <div>
      <Textfit className='display' max={70} mode='single'>
        {displayResult}
      </Textfit>
    </div>
  );
};

export default Display;
