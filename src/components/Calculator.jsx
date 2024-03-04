import { useState } from 'react';

import Display from './Display';
import ButtonContainer from './ButtonContainer';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObject, setCalcObject] = useState({
    num1: null,
    num2: null,
    displayValue: null,
    operator: null,
  });

  const handleButtonClick = (input) => {
    const newCalcObject = calculate(input, calcObject);
    setCalcObject(newCalcObject);
  };

  return (
    <div>
      <div>
        <div>
          <Display value={calcObject.displayValue} />
          <ButtonContainer onButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
