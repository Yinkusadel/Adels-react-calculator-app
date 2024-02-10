import { Themes, Label } from './Label';
import Input from './Input';

const inputProps = [
  {
    className: ' checked checked:bg-themeOne-30 checked:hover:bg-themeOne-40',
    id: 'theme-choice-one',
    value: 'themeOne',
    checked: true,
  },
  {
    className: ' checked:bg-themeTwo-30 checked:hover:bg-themeTwo-40',
    id: 'theme-choice-two',
    value: 'themeTwo',
  },
  {
    className: ' checked:bg-themeThree-30 checked:hover:bg-themeThree-40',
    id: 'theme-choice-three',
    value: 'themeThree',
  },
];

const ThemeInputs = () => {
  return (
    <>
      {inputProps.map((props, index) => (
        <Input key={index} {...props} />
      ))}
    </>
  );
};

const LabelSelector = () => {
  return (
    <>
      {Themes.map((theme) => (
        <Label key={theme.id} value={theme.value} htmlFor={theme.id} />
      ))}
    </>
  );
};

const ThemeSwitcher = () => {
  return (
    <div class="ml-2 flex h-12 w-1/5 flex-col items-center">
      <form name="themeForm">
        <div class=" flex h-6 w-16 items-center justify-between">
          <LabelSelector />
        </div>
        <div class=" flex h-6 w-16 items-center justify-between rounded-lg bg-themeOne-20 ">
          <ThemeInputs />
        </div>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
