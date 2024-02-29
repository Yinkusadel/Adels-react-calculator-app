import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import QuotePage from '../routerpages/QuotePage';
import CalculatorPage from '../routerpages/CalculatorPage';

const DefaultPageContent = () => (
  <div className="font-semibold">
    <p className="text-3xl">Welcome to our page!</p>
    <p className="my-10">
      Hey there. I'm Ibrohim. I'm a software developer. I can help you build a product, feature, or
      website. Look through some of my work and experience! If you like what you see and have a
      project you need coded, don't hesitate to contact me.
    </p>
    <p className="my-10">
      Hey there. I'm Ibrohim. I'm a software developer. I can help you build a product, feature, or
      website. Look through some of my work and experience! If you like what you see and have a
      project you need coded, don't hesitate to contact me.
    </p>
  </div>
);

const App = () => {
  return (
    <>
      <div className="p-5 font-Lexend">
        <div className="mb-10 flex justify-between">
          <p className="w-3/4 text-5xl ">Math Magicians</p>
          <nav className="w-[250px]">
            <ul className="flex justify-between text-lg ">
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-1 border-r-2 border-solid border-black"></li>
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/CalculatorPage">Calculator </Link>
              </li>
              <li className="mx-1 border-r-2 border-solid border-black"></li>
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/QuotePage">Quote </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<DefaultPageContent />} />
          <Route path="/QuotePage" element={<QuotePage />} />
          <Route path="/CalculatorPage" element={<CalculatorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
