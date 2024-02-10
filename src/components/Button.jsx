const Button = ({ value }) => {
  let style =
    'h-12 w-1/5 rounded bg-themeOne-80 text-3xl text-themeOne-100 shadow-ash hover:bg-themeOne-90 active:translate-y-1';

  switch (value) {
    case 'DEL':
      style =
        'delete-btn h-12 w-1/5 rounded bg-themeOne-120 text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-130 active:translate-y-1';
      break;
    case 'RESET':
      style =
        ' h-12 w-[48%] rounded bg-themeOne-150 text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-160 active:translate-y-1';
      break;
    case '=':
      style =
        ' h-12 w-[48%] rounded bg-themeOne-180 text-2xl font-bold text-themeOne-white shadow-red hover:bg-themeOne-190 active:translate-y-1';
      break;
    default:
      break;
  }

  return (
    <button className={style} type="button" value={value}>
      {value}
    </button>
  );
};

const CalcButtons = () => {
  const ButtonValues = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', 'x'],
    ['RESET', '='],
  ];

  const MapButton = ButtonValues.map((row) => (
    <div className="mb-2 flex items-center justify-between">
      {row.map((buttonValue) => (
        <Button value={buttonValue} />
      ))}
    </div>
  ));

  return <>{MapButton}</>;
};

export default CalcButtons;
