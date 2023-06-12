import React, { useState, useEffect } from 'react';
import './MessageBoard.css';

const DisappearingMessageBoard = () => {
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setDisplayedMessage(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(setTimeout(() => setDisplayedMessage(''), 5000)); // 5000 ms = 5 seconds
  };

  return (
    <div>
      <h2>Disappearing Message Board</h2>
      <input
        type="text"
        placeholder="Type your message here"
        value={message}
        onChange={handleChange}
      />
      <p>{displayedMessage}</p>
    </div>
  );
};

export default DisappearingMessageBoard;
