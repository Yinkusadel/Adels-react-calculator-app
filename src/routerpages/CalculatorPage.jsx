import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  return (
    <div className="flex flex-col justify-between text-3xl font-semibold lg:flex-row">
      <p className="w-2/5">Let&apos;s do some math!</p>
      <div className="w-3/5">
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
