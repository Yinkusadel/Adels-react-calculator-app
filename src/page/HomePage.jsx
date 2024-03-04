import { Link } from 'react-router-dom';

const HomePage = () => (
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
      <Link className="text-blue-300 underline" to="/calculator">
        Calculator{' '}
      </Link>
    </p>
  </div>
);

export default HomePage;
