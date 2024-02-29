import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  return (
    <div class="flex justify-between text-3xl font-semibold">
      <p>Let's do some math!</p>
      {/* <div class="h-96 w-6/12  border border-solid border-gray-500 p-4"> */}
      <div class="pr-10">
        <Calculator />
      </div>
      {/* </div> */}
    </div>
  );
};

export default CalculatorPage;
