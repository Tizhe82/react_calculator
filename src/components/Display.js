import React, { useContext } from 'react';
import { ContextCalc } from '../context/ContextCalc';

const Display = () => {
  const { calc } = useContext(ContextCalc);

  const displayContent = calc.num ? calc.num : calc.res + calc.sign;
  const displayResult = calc.isEqualClicked ? calc.res : displayContent;

  return (
    <div className="display" style={styles.display}>
      {displayResult}
    </div>
  );
};

const styles = {
  display: {
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '70px',
  },
};

export default Display;
