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

  if (new Date() < startTime || new Date() > endTime) {
    // If the current time is before 8 pm or after 10 pm, don't render the Timer
    return null;
  }

  return (
    <div>
      <p className='text-3xl text-white'>Time Remaining: {Math.floor(time / 3600)}:{Math.floor((time % 3600) / 60)}:{time % 60}</p>
      <button onClick={() => setIsTimerRunning(!isTimerRunning)} className='text-3xl text-white'>
        {isTimerRunning ? 'Pause Timer' : 'Resume Timer'}
      </button>
      <a href="#" onClick={handleLinkClick} disabled={!isTimerRunning} className='text-xl text-white'>
        Your Link
      </a>
    </div>
  );
};

export default Timer;
