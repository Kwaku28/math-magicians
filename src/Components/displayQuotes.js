import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Styles/quotes.module.css';

function DisplayQuote() {
  const [myQuote, setMyQuote] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError] = useState(null);

  useEffect(() => {
    const fetchMyQuote = async () => {
      try {
        const res = await axios.get(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'X-Api-Key': 'O3dfbRYlNG/QpiO5NM7Mzw==GheuTJj1dn9M0udu',
            },
          },
        );
        setMyQuote(res.data[0].quote);
        setQuoteLoading(false);
      } catch (error) {
        setQuoteLoading(false);
        setQuoteError(error.message);
      }
    };
    fetchMyQuote();
  }, []);

  if (quoteLoading) {
    return <div className={styles.quotes}>Loading...</div>;
  }

  if (quoteError !== null) {
    return <div className={styles.quotes}>{quoteError}</div>;
  }

  return (
    <div className={styles.quotes}>{myQuote}</div>
  );
}

export default DisplayQuote;
