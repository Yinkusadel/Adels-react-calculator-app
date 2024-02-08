import Header from './Header';
import UserDisplay from './UserDisplay1';
import ButtonContainer from './ButtonContainer';

const App = () => {
  return (
    <>
      <div className="pages-body ease flex min-h-screen items-center justify-center bg-themeOne-mobile-view-background text-themeOne-mobile-text-colors transition-all duration-300 ">
        <div className="calculator-container flex min-h-screen w-[300px] items-center">
          <div className="calculator-mainbody min-h-[90vh] w-[300px]">
            <Header />
            <UserDisplay />
            <ButtonContainer />
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default App;
