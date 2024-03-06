import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
import Calculator from './Calculator';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/Math Magicians/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders calculator page when calculator link is clicked', async () => {
    render(<App />);
    const calculatorLinks = screen.getAllByText(/Calculator/i);
    calculatorLinks.forEach((link) => {
      fireEvent.click(link);
    });

    const calculatorPageElement = await screen.findByText(/Let's do some math!/i);

    expect(calculatorPageElement).toBeInTheDocument();
  });
});

jest.mock('./Display', () => {
  return {
    __esModule: true,
    default: function MockDisplay({ value }) {
      return <div>{value}</div>;
    },
    displayName: 'MockDisplay',
  };
});

describe('Calculator', () => {
  it('checks calculator initial value is set to 0', async () => {
    render(<Calculator />);

    const displayElement = screen.getByText(/0/i);

    expect(displayElement).toBeInTheDocument();
  });
});
