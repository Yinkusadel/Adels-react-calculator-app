const DefaultBtn = ({ value }) => {
  return (
    <>
      <button
        class="btn h-12 w-1/5 rounded bg-themeOne-mobile-button-keys-background text-3xl text-themeOne-mobile-button-keys-color shadow-ash hover:bg-themeOne-mobile-button-keys-background-hover active:translate-y-1 "
        type="button"
        value="7"
      >
        {value}
      </button>
    </>
  );
};

export default DefaultBtn;
