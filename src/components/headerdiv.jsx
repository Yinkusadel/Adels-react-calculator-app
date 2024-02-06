const HeaderDiv = () => {
  return (
    <div class="header flex h-[10vh] w-full items-center justify-between">
      <div class="header-texts flex h-[80%] w-4/5 items-center justify-between">
        <h1 class="calc-text text-3xl">calc</h1>
        <p>THEME</p>
      </div>
      <div class="label-input ml-2 flex h-12 w-1/5 flex-col items-center">
        <form class="theme-form" name="themeForm">
          <div class="labels flex h-6 w-16 items-center justify-between">
            <label for="theme-choice-one" className="flex w-4 justify-center">
              1
            </label>
            <label for="theme-choice-two" className="flex w-4 justify-center">
              2
            </label>
            <label for="theme-choice-three" className="flex w-4 justify-center">
              3
            </label>
          </div>
          <div class="theme-inputs flex h-6 w-16 items-center justify-between rounded-lg bg-themeOne-mobile-radio-input-background ">
            <input
              class="themeOne duration-200checked h-4 w-4 cursor-pointer appearance-none rounded-full transition-all checked:bg-themeOne-mobile-radio-input-checked checked:hover:bg-themeOne-mobile-radio-input-checked-hover "
              id="theme-choice-one"
              name="theme"
              type="radio"
              value="themeOne"
              checked
            />
            <input
              class="themeTwo h-4 w-4 cursor-pointer appearance-none rounded-full transition-all duration-200 checked:bg-themeTwo-mobile-radio-input-checked checked:hover:bg-themeTwo-mobile-radio-input-checked-hover"
              id="theme-choice-two"
              name="theme"
              type="radio"
              value="themeTwo"
            />
            <input
              class="themeThree h-4 w-4 cursor-pointer appearance-none rounded-full transition-all duration-200 checked:bg-themeThree-mobile-radio-input-checked checked:hover:bg-themeThree-mobile-radio-input-checked-hover"
              id="theme-choice-three"
              name="theme"
              type="radio"
              value="themeThree"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderDiv;
