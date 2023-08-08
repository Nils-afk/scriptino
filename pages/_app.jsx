// pages/timer.js
import { useEffect, useState } from 'react';

const TimerPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
      setDarkMode(true);
    }
  };

  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: darkMode ? '#1f1f1f' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  const confirmationStyles = {
    backgroundColor: darkMode ? '#292929' : 'white',
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
    borderRadius: '5px',
  };

  const buttonStyles = {
    margin: '0 10px',
    padding: '5px 10px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    borderRadius: '3px',
  };

  const yesButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
  };

  const noButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
  };

  return (
    <div style={containerStyles}>
      {showConfirmation ? (
        <div style={confirmationStyles}>
          <p>Do you really want to proceed to the website with the timer?</p>
          <div>
            <button style={yesButtonStyles} onClick={() => handleConfirmation(true)}>Yes</button>
            <button style={noButtonStyles} onClick={() => handleConfirmation(false)}>No</button>
          </div>
        </div>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default TimerPage;
