import Button from './Button';

const CalcButtons = ({ onButtonClick }) => {
  const buttonValue = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', '*'],
    ['RESET', '='],
  ];

  const handleButtonClick = (value) => {
    onButtonClick(value);
  };

  const MapButton = buttonValue.map((row, rowIndex) => (
    <div key={rowIndex} className="mb-2 flex items-center justify-between">
      {row.map((buttonValue, index) => (
        <Button key={index} value={buttonValue} onClick={() => handleButtonClick(buttonValue)} />
      ))}
    </div>
  ));

  return <>{MapButton}</>;
};

const ButtonContainer = ({ onButtonClick }) => {
  return (
    <div className="h-[52vh]">
      <div className="mt-3 w-full rounded-lg bg-themeOne-70 p-5 ">
        <CalcButtons onButtonClick={onButtonClick} />
      </div>
    </div>
  );
};

export default ButtonContainer;
