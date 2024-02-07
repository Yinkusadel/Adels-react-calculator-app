import Label from './Label';
import Input from './Input';

const ThemeSwitcher = ({ value, htmlFor }) => {
  return (
    <div class="label-input ml-2 flex h-12 w-1/5 flex-col items-center">
      <form class="theme-form" name="themeForm">
        <div class="labels flex h-6 w-16 items-center justify-between">
          <Label value="1" for="theme-choice-one" htmlFor="theme-choice-one" />
          <Label value="2" for="theme-choice-two" htmlFor="theme-choice-two" />
          <Label value="3" for="theme-choice-three" htmlFor="theme-choice-three" />
        </div>
        <div class="theme-inputs flex h-6 w-16 items-center justify-between rounded-lg bg-themeOne-mobile-radio-input-background ">
          <Input
            style="themeOne duration-200checked h-4 w-4 cursor-pointer appearance-none rounded-full transition-all checked:bg-themeOne-mobile-radio-input-checked checked:hover:bg-themeOne-mobile-radio-input-checked-hover "
            id="theme-choice-one"
            value="themeOne"
            checked
          />
          <Input
            style="themeTwo h-4 w-4 cursor-pointer appearance-none rounded-full transition-all duration-200 checked:bg-themeTwo-mobile-radio-input-checked checked:hover:bg-themeTwo-mobile-radio-input-checked-hover"
            id="theme-choice-two"
            value="themeTwo"
          />
          <Input
            style="themeThree h-4 w-4 cursor-pointer appearance-none rounded-full transition-all duration-200 checked:bg-themeThree-mobile-radio-input-checked checked:hover:bg-themeThree-mobile-radio-input-checked-hover"
            id="theme-choice-three"
            value="themeThree"
          />
        </div>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
