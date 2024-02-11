import Header from './Header';
import UserDisplay from './UserDisplay';
import ButtonContainer from './ButtonContainer';

const App = () => {
  return (
    <>
      <div className="  flex min-h-screen items-center justify-center bg-themeOne-10 text-themeOne-50 transition-all duration-300 ">
        <div className=" flex min-h-screen w-[300px] items-center">
          <div className=" min-h-[90vh] w-[300px]">
            <Header />
            <UserDisplay value={'399,981'} />
            <ButtonContainer />
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default App;
