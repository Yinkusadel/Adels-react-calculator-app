const UserDisplay = ({ value }) => {
  return (
    <div class=" rounded-10 mt-1 flex h-[15vh] flex-col justify-center bg-themeOne-60 ">
      <div class=" w-97 h-[7vh] justify-end text-right text-[32px]">{value}</div>
    </div>
  );
};

export default UserDisplay;
