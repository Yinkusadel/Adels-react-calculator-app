import Button from './Button';

const ButtonContainer = () => {
  return (
    <div class=" h-[65vh]">
      <div class=" mt-5 w-[300px] rounded-lg bg-themeOne-70 p-5 ">
        <div class="  mb-2 flex items-center justify-between">
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button
            value="DEL"
            style="delete-btn h-12 w-1/5 rounded bg-themeOne-120 text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-130 active:translate-y-1"
          />
        </div>
        <div class="  mb-2 flex items-center justify-between">
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="+" />
        </div>
        <div class="  mb-2 flex items-center justify-between">
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="-" />
        </div>
        <div class="  mb-2 flex items-center justify-between">
          <Button value="." />
          <Button value="0" />
          <Button value="/" />
          <Button value="x" />
        </div>
        <div class="  mb-2 flex items-center justify-between">
          <Button
            value="RESET"
            style=" h-12 w-[48%] rounded bg-themeOne-150 text-2xl font-bold text-themeOne-white shadow-darkblue hover:bg-themeOne-160 active:translate-y-1"
          />
          <Button
            value="="
            style=" h-12 w-[48%] rounded bg-themeOne-180 text-2xl font-bold text-themeOne-white shadow-red hover:bg-themeOne-190 active:translate-y-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
