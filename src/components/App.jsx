import React, { useState } from 'react';

import Header from './Header';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import calculate from '../logic/calculate';

const App = () => {
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
    <>
      <div className="flex min-h-screen items-center justify-center bg-themeOne-10 text-themeOne-50 transition-all duration-300 ">
        <div className="flex min-h-screen w-[300px] items-center md:w-[500px]">
          <div className="min-h-[90vh] w-[300px] md:w-[500px]">
            <Header />
            <Display value={calcObject.displayValue} />
            <ButtonContainer onButtonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
