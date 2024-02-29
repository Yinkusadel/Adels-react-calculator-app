const Display = ({ value }) => {
  return (
    <div class=" rounded-10 mt-1 flex h-[12vh] w-[600px] flex-col justify-center rounded-lg bg-themeOne-60 pr-4">
      <div class="  h-[7vh]  text-right  text-3xl text-gray-50 md:text-4xl">{value}</div>
    </div>
  );
};

export default Display;
