const Button = ({
  value,
  style = 'h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1',
}) => {
  return (
    <>
      <button className={style} type="button">
        {value}
      </button>
    </>
  );
};

export default Button;
