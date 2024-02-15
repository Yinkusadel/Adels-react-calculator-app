const Display = ({ value }) => {
  return (
    <div class=" rounded-10 mt-1 flex h-[15vh] flex-col justify-center rounded-lg bg-themeOne-60 pr-4">
      <div class=" w-97 h-[7vh] justify-end text-right text-3xl md:text-4xl">{value}</div>
    </div>
  );
};

export default Display;
