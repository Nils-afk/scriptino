// pages/index.js
import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/ComingSoon.module.css';

const Home = () => {
  useEffect(() => {
    // Redirect to the external website after a delay
    setTimeout(() => {
      window.location.href = 'https://coming-soon-ivory.vercel.app/';
    }, 3000); // Delay in milliseconds (3 seconds in this example)
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Redirecting...</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Redirecting...</h1>
        <p className={styles.description}>
          You are being redirected to our website.
        </p>
      </main>
    </div>
  );
};

export default Home;
