import Header from './Header';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

const App = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-themeOne-10 text-themeOne-50 transition-all duration-300 ">
        <div className="flex min-h-screen w-[300px] items-center md:w-[500px]">
          <div className="min-h-[90vh] w-[300px] md:w-[500px]">
            <Header />
            <Display value={'399,981'} />
            <ButtonContainer />
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default App;
