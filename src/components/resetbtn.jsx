const ResetBtn = () => {
  return (
    <>
      <button
        class="reset-btn h-12 w-[48%] rounded bg-themeOne-reset-key-background text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-reset-key-background-hover active:translate-y-1"
        type="button"
        value="reset"
      >
        RESET
      </button>
    </>
  );
};

export default ResetBtn;
