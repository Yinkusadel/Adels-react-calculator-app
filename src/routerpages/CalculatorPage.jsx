import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  return (
    <div className="flex flex-col justify-between text-3xl font-semibold lg:flex-row">
      <p className="flex justify-center lg:w-2/5 lg:justify-start">Let&apos;s do some math!</p>
      <div className="lg:w-3/5">
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
