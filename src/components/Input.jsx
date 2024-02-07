const Input = ({
  id,
  name = 'theme',
  value,
  checked,
  style = 'duration-200 h-4 w-4 cursor-pointer appearance-none rounded-full transition-all',
}) => {
  return (
    <input className={style} id={id} name={name} type="radio" value={value} checked={checked} />
  );
};

export default Input;
