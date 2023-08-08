// pages/timer.js
import { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';

const TimerPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfirmation(true);
    }, 5000); // 5 seconds delay for the confirmation

    return () => clearTimeout(timer);
  }, []);

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      window.location.href = 'https://coming-soon-ivory.vercel.app/';
    } else {
      setShowConfirmation(false);
    }
  };

  return (
    <div className={styles.container}>
      {showConfirmation ? (
        <div className={styles.confirmationBox}>
          <p>Do you really want to proceed to the website with the timer?</p>
          <div className={styles.buttons}>
            <button
              className={`${styles.button} ${styles.yesButton}`}
              onClick={() => handleConfirmation(true)}
            >
              Yes
            </button>
            <button
              className={`${styles.button} ${styles.noButton}`}
              onClick={() => handleConfirmation(false)}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default TimerPage;
