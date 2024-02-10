const Button = ({
  value,
  style = 'h-12 w-1/5 rounded bg-themeOne-80 text-3xl text-themeOne-100 shadow-ash hover:bg-themeOne-90 active:translate-y-1',
}) => {
  return (
    <>
      <button className={style} type="button" value={value}>
        {value}
      </button>
    </>
  );
};

export default Button;
