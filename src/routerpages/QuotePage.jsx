import { useState, useEffect } from 'react';

const QuotePage = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'happiness';
    const apiKey = import.meta.env.VITE_NINJAS_QUOTES_API_KEY;
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    if (quote === '') {
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.length > 0) {
            setQuote(data[0].quote);
          }
        })
        .catch((error) => {
          setError(error);
        });
    }
  });

  if (error) {
    return <div>An error occurred. Please try again later.</div>;
  }

  return (
    <div className="flex h-64 items-end justify-center">
      <p className="w-9/12 text-3xl">{quote !== '' ? quote : 'Loading quote...'}</p>
    </div>
  );
};

export default QuotePage;
