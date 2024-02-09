import LabelSelector from './Label';
import ThemeInputs from './Input';

const ThemeSwitcher = ({ value, htmlFor }) => {
  return (
    <div class="label-input ml-2 flex h-12 w-1/5 flex-col items-center">
      <form class="theme-form" name="themeForm">
        <div class="labels flex h-6 w-16 items-center justify-between">
          <LabelSelector />
        </div>
        <div class="theme-inputs flex h-6 w-16 items-center justify-between rounded-lg bg-themeOne-mobile-radio-input-background ">
          <ThemeInputs />
        </div>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
