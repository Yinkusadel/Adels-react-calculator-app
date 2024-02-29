import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <div class=" flex h-[10vh] w-[600px] justify-between">
      <div class=" flex h-[80%] w-full items-center justify-between text-xl md:text-base ">
        <h1>calc</h1>
        <p>THEME</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
