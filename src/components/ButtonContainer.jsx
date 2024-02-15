import Button from './Button';

const CalcButtons = () => {
  const buttonValue = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', 'x'],
    ['RESET', '='],
  ];

  const MapButton = buttonValue.map((row) => (
    <div className="mb-2 flex items-center justify-between">
      {row.map((buttonValue) => (
        <Button value={buttonValue} />
      ))}
    </div>
  ));

  return <>{MapButton}</>;
};

const ButtonContainer = () => {
  return (
    <div class="h-[65vh]">
      <div class="mt-5 w-[300px] rounded-lg bg-themeOne-70 p-5 md:w-[500px]">
        <CalcButtons />
      </div>
    </div>
  );
};

export default ButtonContainer;
