import DefaultBtn from './defaultbtn';
import DeleteBtn from './deletebtn';
import ResetBtn from './resetbtn';
import EqualBtn from './equaltobtn';

const UserButtons = () => {
  return (
    <div class="user-butns h-[65vh]">
      <div class="calculator-btns mt-5 w-[300px] rounded-lg bg-themeOne-mobile-button-background p-5 ">
        <div class="row  mb-2 flex items-center justify-between">
          <DefaultBtn value="7" />
          <DefaultBtn value="8" />
          <DefaultBtn value="9" />
          <DeleteBtn />
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <DefaultBtn value="4" />
          <DefaultBtn value="5" />
          <DefaultBtn value="6" />
          <DefaultBtn value="+" />
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <DefaultBtn value="1" />
          <DefaultBtn value="2" />
          <DefaultBtn value="3" />
          <DefaultBtn value="-" />
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <DefaultBtn value="." />
          <DefaultBtn value="0" />
          <DefaultBtn value="/" />
          <DefaultBtn value="x" />
        </div>
        <div class="row  mb-2 flex items-center justify-between">
          <ResetBtn />
          <EqualBtn />
        </div>
      </div>
    </div>
  );
};

export default UserButtons;
