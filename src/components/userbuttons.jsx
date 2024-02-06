const UserButtons = () => {
  return (
    <div class="user-butns h-[65vh]">
      <div class="calculator-btns mt-5 w-[300px] rounded-lg bg-themeOne-mobile-button-background p-5 ">
        <div class="row  mb-2 flex items-center justify-between">
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1 "
            type="button"
            value="7"
          >
            7
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="8"
          >
            8
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="9"
          >
            9
          </button>
          <button
            class="delete-btn h-12 w-1/5 rounded bg-themeOne-delete-key-background text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-delete-key-background-hover active:translate-y-1"
            type="button"
            value="DEL"
          >
            DEL
          </button>
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="4"
          >
            4
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="5"
          >
            5
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="6"
          >
            6
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="+"
          >
            +
          </button>
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="1"
          >
            1
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="2"
          >
            2
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="3"
          >
            3
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="-"
          >
            -
          </button>
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="."
          >
            .
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="0"
          >
            0
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="/"
          >
            /
          </button>
          <button
            class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1"
            type="button"
            value="*"
          >
            x
          </button>
        </div>
        <div class="row  flex items-center justify-between">
          <button
            class="reset-btn h-12 w-[48%] rounded bg-themeOne-reset-key-background text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-reset-key-background-hover active:translate-y-1"
            type="button"
            value="reset"
          >
            RESET
          </button>
          <button
            class="equal-to-btn h-12 w-[48%] rounded bg-themeOne-equal-to-key-background text-2xl font-bold text-themeOne-white shadow-red hover:bg-themeOne-equal-to-key-background-hover active:translate-y-1"
            type="button"
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserButtons;
