const Input = ({ id, value, checked, className }) => {
  return (
    <input
      className={`'duration-200 h-4 w-4 cursor-pointer appearance-none rounded-full transition-all'${className}`}
      id={id}
      name="theme"
      type="radio"
      value={value}
      checked={checked}
    />
  );
};

export default Input;
