import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(new Date('2024-01-06T20:00:00')); // 8 pm
  const [endTime, setEndTime] = useState(new Date('2024-01-06T22:00:00'));   // 10 pm
  const [time, setTime] = useState(Math.floor((endTime - new Date()) / 1000));
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    const currentTime = new Date();

    if (currentTime < startTime || currentTime > endTime) {
      // If the current time is before 8 pm or after 10 pm, stop the timer
      setIsTimerRunning(false);
    }
  }, [startTime, endTime]);

  const handleLinkClick = () => {
    if (!isTimerRunning) {
      alert("Timer has stopped. Link is disabled.");
      // You can add additional logic or redirection here
    }
  };

  // if (new Date() < startTime || new Date() > endTime) {
  //   // If the current time is before 8 pm or after 10 pm, don't render the Timer
  //   return null;
  // }

  return (
    <div style={{ position: 'absolute', top: '0', right: '0', textAlign: 'right', marginTop: '20px', marginRight: '20px', paddingTop: '20px' }}>
  <p style={{
    fontSize: '1rem',
    color: '#3498db',
    marginBottom: '10px',
    padding: '10px',
    border: '2px solid #3498db',
    borderRadius: '8px',
  }}>
    Time Remaining: {Math.floor(time / 3600)}:{Math.floor((time % 3600) / 60)}:{time % 60}
  </p>
  <button
    onClick={() => setIsTimerRunning(!isTimerRunning)}
    style={{
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: isTimerRunning ? '#e74c3c' : '#2ecc71',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'block',
      marginBottom: '10px',
      width: '100%',
    }}
    onMouseEnter={(e) => e.target.style.transform = 'translateX(-5px)'}
    onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
  >
    {isTimerRunning ? 'Pause Timer' : 'Resume Timer'}
  </button>
  <a
    href="#"
    onClick={handleLinkClick}
    disabled={!isTimerRunning}
    style={{
      fontSize: '1rem',
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      marginTop: '10px',
      width: '100%',
      backgroundColor: '#2ecc71', // Green background color
      padding: '10px', // Add padding for better appearance
      borderRadius: '5px', // Add border-radius for rounded corners
      textAlign: 'center', // Center the text
    }}
    onMouseEnter={(e) => e.target.style.transform = 'translateX(-5px)'}
    onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
    
  >
    Your Link
  </a>
</div>









  );
};

export default Timer;