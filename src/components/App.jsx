import { Link, Route, Routes } from 'react-router-dom';
import Quote from '../routerpages/QuotePage';
import Calculator from '../routerpages/CalculatorPage';

const DefaultPageContent = () => (
  <div className="font-semibold">
    <p className="text-3xl">Welcome to our page!</p>
    <p className="my-10">
      Hey there. I&apos;m Ibrohim. I&apos;m a software developer. I can help you build a product,
      feature, or website. Look through some of my work and experience! If you like what you see and
      have a project you need coded, don&apos;t hesitate to contact me.
    </p>
    <p className="my-10">
      calculator app, designed to simplify your mathematical tasks effortlessly. With an intuitive
      interface and advanced functionality. click here to visit{' '}
      <Link className="text-blue-300 underline" to="/CalculatorPage">
        Calculator{' '}
      </Link>
    </p>
  </div>
);

const App = () => {
  return (
    <>
      <div className="h-[95vh] p-5 font-Lexend">
        <div className="mb-10 flex justify-between">
          <p className="w-3/4 text-5xl ">Math Magicians</p>
          <nav className="w-[250px]">
            <ul className="flex justify-between text-lg ">
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-1 border-r-2 border-solid border-black"></li>
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/Calculator">Calculator </Link>
              </li>
              <li className="mx-1 border-r-2 border-solid border-black"></li>
              <li className="text-blue-500 underline hover:text-black ">
                <Link to="/Quote">Quote </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<DefaultPageContent />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </div>
      <footer className="flex h-[5vh] justify-center bg-gray-300">
        <ul className="flex">
          <li className="flex items-center p-2">
            <a
              href="https://twitter.com/HashiraAdel"
              title="twitter link icon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden">twitter</span>
              <svg
                className="hover:fill-socialMediaFill-1"
                aria-label="twitter"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.1753 0.394423C19.842 -0.00424693 19.2753 -0.103914 18.842 0.195088L16.9086 1.52399C16.0086 0.560536 14.742 0.0289756 13.3753 0.0289756C10.6753 0.0289756 8.44198 2.22166 8.44198 4.94591C8.44198 5.34458 8.47532 5.71002 8.57532 6.07547C6.24198 5.57713 4.84198 3.88279 4.30865 0.826316C4.24198 0.427646 3.94198 0.128643 3.54198 0.0289756C3.17532 -0.070692 2.77532 0.0954206 2.54198 0.394423C2.47532 0.460868 -3.02468 8.10205 4.94198 14.5804C4.17532 16.2083 1.87532 17.6037 0.975315 18.0688C0.541982 18.2681 0.341982 18.7332 0.441982 19.1984C0.541982 19.6635 0.941982 19.9625 1.40865 19.9625H3.14198C13.2753 19.9625 17.8753 14.9459 17.9753 3.71667L20.0753 1.72332C20.4753 1.3911 20.5086 0.793093 20.1753 0.394423Z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center p-2">
            <a
              href="https://www.linkedin.com/in/adeleye-olayinka/"
              title="linkedin link icon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden">linkedin</span>
              <svg
                className="hover:fill-socialMediaFill-2"
                aria-label="linkedin"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.061 3.03418C10.5722 3.03418 7.70523 5.86177 7.70523 9.37901V19.31C7.70523 19.6894 8.01611 19.9997 8.39608 19.9997H11.9885C12.3684 19.9997 12.6793 19.6894 12.6793 19.31V9.65487C12.6793 8.89625 13.3011 8.27556 14.061 8.27556C14.8209 8.27556 15.4427 8.89625 15.4427 9.65487V19.31C15.4427 19.6894 15.7536 19.9997 16.1336 19.9997H19.726C20.1059 19.9997 20.4168 19.6894 20.4168 19.31V9.37901C20.4168 5.89625 17.5843 3.03418 14.061 3.03418Z" />
                <path d="M2.90371 0C1.52202 0 0.416664 1.10345 0.416664 2.48276C0.416664 3.86207 1.52202 4.96552 2.90371 4.96552C4.2854 4.96552 5.39076 3.86207 5.39076 2.48276C5.39076 1.10345 4.2854 0 2.90371 0Z" />
                <path d="M4.69991 6.27539H1.10751C0.727545 6.27539 0.416664 6.58574 0.416664 6.96505V19.3099C0.416664 19.6892 0.727545 19.9995 1.10751 19.9995H4.69991C5.07988 19.9995 5.39076 19.6892 5.39076 19.3099V6.96505C5.39076 6.58574 5.07988 6.27539 4.69991 6.27539Z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center p-2">
            <a href="link address" title="medium link icon" target="_blank" rel="noreferrer">
              <span className="hidden">medium</span>
              <svg
                className="hover:fill-socialMediaFill-3"
                aria-label="medium"
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.8208 1.88042L20.4167 0.337684V0H14.8883L10.9483 9.90989L6.46582 0H0.669156V0.337684L2.53332 2.60547C2.71499 2.77305 2.80999 3.01811 2.78582 3.26484V12.1768C2.84332 12.4977 2.73999 12.8278 2.51666 13.0611L0.416656 15.6328V15.9663H6.37082V15.6286L4.27082 13.0611C4.04332 12.8269 3.93582 12.5027 3.98166 12.1768V4.46821L9.20832 15.9705H9.81582L14.31 4.46821V13.6312C14.31 13.8728 14.31 13.9225 14.1533 14.0808L12.5367 15.6615V16H20.38V15.6623L18.8217 14.1204C18.685 14.016 18.6142 13.8408 18.6433 13.6707V2.33011C18.6142 2.15916 18.6842 1.984 18.8208 1.88042Z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center p-2">
            <a
              href="https://github.com/yinkusadel"
              title="github link icon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hidden">github</span>
              <svg
                className="hover:fill-socialMediaFill-4"
                aria-label="github"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.4019 7.46114C18.4019 6.32124 18.0359 5.25043 17.3372 4.31779C17.6033 3.41969 17.6699 2.27979 17.6033 0.967185C17.5701 0.414508 17.1375 0 16.6052 0C16.3057 0 13.7771 0.0345423 12.3131 1.38169C11.0488 1.1399 9.71794 1.1399 8.42034 1.38169C6.98966 0.0345423 4.46101 0 4.12829 0C3.59594 0 3.16341 0.414508 3.13014 0.967185C3.03032 2.27979 3.13014 3.41969 3.39631 4.31779C2.6976 5.28497 2.33162 6.35579 2.33162 7.46114C2.33162 9.8791 4.12829 12.0553 6.85657 13.0915C6.75675 13.2988 6.69021 13.5406 6.62367 13.7824C3.72903 13.4715 2.36489 10.7427 2.29834 10.639C2.06544 10.1209 1.46655 9.91364 0.967475 10.19C0.468399 10.4318 0.268769 11.0535 0.534942 11.5717C0.601486 11.7444 2.43143 15.4404 6.45731 15.8549V18.9637C6.45731 19.5509 6.88984 20 7.45546 20H13.278C13.8436 20 14.2762 19.5509 14.2762 18.9637V14.8532C14.2762 14.2314 14.1431 13.6442 13.9102 13.1261C16.6052 12.0553 18.4019 9.91364 18.4019 7.46114Z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center p-2">
            <a href="link address" title="angelists link icon" target="_blank" rel="noreferrer">
              <span className="hidden">angelists</span>
              <svg
                className="hover:fill-socialMediaFill-5"
                aria-label="angelists"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.96416 20C11.6608 20 14.5833 16.5392 14.5833 12.0742C14.5833 10.3908 14.3092 8.87083 12.3983 8.41417C12.8633 7.14083 14.205 3.4575 14.205 2.2775C14.205 1.23833 13.58 0.3675 12.4658 0.3675C10.69 0.3675 9.09833 5.51167 8.59999 6.73833C8.21416 5.625 6.4075 0 4.81499 0C3.57749 0 2.99666 0.894167 2.99666 2.01917C2.99666 3.39833 4.35749 6.9725 4.85083 8.3475C4.60083 8.2575 4.32999 8.17917 4.05416 8.17917C3.12249 8.17917 2.13166 9.31583 2.13166 10.2342C2.13166 10.5817 2.32666 11.07 2.44999 11.3942C0.981661 11.785 0.416661 12.7458 0.416661 14.195C0.412495 17.015 3.13583 20 6.96416 20ZM10.9892 4.21917C11.1492 3.73833 11.8292 1.7075 12.4658 1.7075C12.8083 1.7075 12.9 2.055 12.9 2.3325C12.9 3.07833 11.3642 7.2 11.025 8.11333L9.67166 7.87917L10.9892 4.21917ZM4.24666 1.8875V1.88667C4.24666 1.42167 4.82416 0.101667 6.08916 3.72667L7.46666 7.645C6.84583 7.59417 6.36416 7.5275 6.05833 7.7C5.62416 6.575 4.24666 3.02417 4.24666 1.8875ZM4.15499 9.53083L4.15583 9.53167C5.32166 9.53167 6.82666 13.2267 6.82666 13.7267C6.82666 13.9258 6.63166 14.1717 6.40499 14.1717C5.57249 14.1717 3.34333 11.1675 3.34333 10.355C3.34666 10.0542 3.84833 9.53083 4.15499 9.53083ZM2.81499 12.5892C3.26833 12.5892 4.97583 14.945 4.97583 15.445C4.97583 15.6367 4.66916 15.7692 4.51083 15.7692C3.86999 15.7692 3.61916 15.1633 2.47749 13.7617C1.29499 14.9217 3.29333 17.1558 4.79833 17.1558C5.83666 17.1558 6.51333 16.2108 6.31083 15.515C6.45833 15.515 6.64083 15.5267 6.77666 15.4917C6.82083 16.55 7.13916 17.8117 8.43666 17.9017C8.43666 17.8667 8.51666 17.6242 8.51666 17.6125C8.51666 16.9325 8.09499 16.3392 8.09499 15.6475C8.09499 14.5417 8.95833 13.4717 9.83416 12.8467C10.1525 12.6125 10.5392 12.4675 10.9125 12.335C11.2992 12.1908 11.7092 12.0225 12.0025 11.7333C11.9583 11.2958 11.7758 10.9092 11.33 10.9092C10.2275 10.9092 6.53 11.0658 6.53 9.35833C6.53 9.09667 6.53416 8.84667 7.22333 8.84667C8.50916 8.84667 11.7733 9.15917 12.7283 9.98333C13.4483 10.6125 13.6958 14.405 11.4942 16.8075L11.4917 16.8083C10.3333 18.0583 8.8525 18.7067 7.125 18.7067C4.76083 18.7067 2.89333 17.4333 1.99416 15.2575C1.31333 13.5625 2.14583 12.5892 2.81499 12.5892ZM7.56583 11.8858C7.95333 12.0075 8.35083 12.0433 8.74916 12.1208C8.45416 12.3317 8.1925 12.59 7.94083 12.8667C7.82916 12.535 7.69333 12.2108 7.56583 11.8858Z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
