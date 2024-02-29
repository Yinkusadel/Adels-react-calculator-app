import Label from './Label';
import Input from './Input';

const labelInput = [
  {
    id: 'theme-choice-one',
    value: '1',
    className: 'checked checked:bg-themeOne-30 checked:hover:bg-themeOne-40',
    checked: true,
  },
  {
    id: 'theme-choice-two',
    value: '2',
    className: 'checked:bg-themeTwo-30 checked:hover:bg-themeTwo-40',
  },
  {
    id: 'theme-choice-three',
    value: '3',
    className: 'checked:bg-themeThree-30 checked:hover:bg-themeThree-40',
  },
];

const ThemeSwitcher = () => {
  return (
    <div class="ml-2 flex h-12  flex-col items-end">
      <form name="themeForm w-1/5">
        <div class="flex h-6 w-16 items-center justify-between text-base ">
          {labelInput.map(({ id, value }) => (
            <Label key={id} value={value} htmlFor={id} />
          ))}
        </div>
        <div class="flex h-6 w-16 items-center justify-between rounded-lg bg-themeOne-20 ">
          {labelInput.map((props, index) => (
            <Input key={index} {...props} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default ThemeSwitcher;
