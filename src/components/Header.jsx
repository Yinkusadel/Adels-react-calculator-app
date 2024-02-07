import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <div class="header flex h-[10vh] w-full items-center justify-between">
      <div class="header-texts flex h-[80%] w-4/5 items-center justify-between">
        <h1 class="calc-text text-3xl">calc</h1>
        <p>THEME</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
