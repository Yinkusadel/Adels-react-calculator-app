const Input = ({
  id,
  name = 'theme',
  value,
  checked,
  style = 'duration-200 h-4 w-4 cursor-pointer appearance-none rounded-full transition-all',
  className,
}) => {
  return (
    <input
      className={`${style} ${className}`}
      id={id}
      name={name}
      type="radio"
      value={value}
      checked={checked}
    />
  );
};

const inputProps = [
  {
    className: "themeOne checked checked:bg-themeOne-mobile-radio-input-checked checked:hover:bg-themeOne-mobile-radio-input-checked-hover",
    id: "theme-choice-one",
    value: "themeOne",
    checked: true
  },
  {
    className: "themeTwo checked:bg-themeTwo-mobile-radio-input-checked checked:hover:bg-themeTwo-mobile-radio-input-checked-hover",
    id: "theme-choice-two",
    value: "themeTwo",
  },
  {
    className: "themeThree checked:bg-themeThree-mobile-radio-input-checked checked:hover:bg-themeThree-mobile-radio-input-checked-hover",
    id: "theme-choice-three",
    value: "themeThree",
  }
];

const ThemeInputs = () => {
  return (
    <>
          {inputProps.map((props, index) => (
        <Input key={index} {...props} />
      ))}
    </>

   
  );
};

export default ThemeInputs;