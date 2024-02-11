const Input = ({ id, value, checked, className }) => {
  return (
    <input
      className={`h-4 w-4 cursor-pointer appearance-none rounded-full transition-all duration-200 ${className}`}
      id={id}
      name="theme"
      type="radio"
      value={value}
      checked={checked}
    />
  );
};

export default Input;
