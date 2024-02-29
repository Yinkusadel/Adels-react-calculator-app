import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <div class=" flex h-[10vh] w-[300px] justify-between">
      <div class=" flex h-[80%] w-60 items-center justify-between text-xl md:text-base ">
        <h1>calc</h1>
        <p>THEME</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
