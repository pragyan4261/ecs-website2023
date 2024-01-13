import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className="card">
      <h2>{props.question}</h2>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Type answer"
        id="answerBox"
      />
    </div>
  );
};

export default Card;


