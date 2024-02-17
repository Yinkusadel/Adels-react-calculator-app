const Button = ({ value, onClick }) => {
  const style =
    value === 'DEL'
      ? 'w-1/5 bg-themeOne-120 text-2xl md:text-3xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-130'
      : value === 'RESET'
        ? 'w-[48%] bg-themeOne-150 text-2xl md:text-3xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-160'
        : value === '='
          ? 'w-[48%] bg-themeOne-180 text-2xl md:text-3xl font-bold text-themeOne-white shadow-red hover:bg-themeOne-190'
          : 'w-1/5 bg-themeOne-80 text-3xl md:text-4xl text-themeOne-100 shadow-ash hover:bg-themeOne-90';

  return (
    <button
      className={`${style} h-12 rounded active:translate-y-1`}
      type="button"
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
