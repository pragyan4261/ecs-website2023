import React, { useState } from 'react';
import './Card.css';


const Card = (props) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  
  };

  return (
    <div className="card space-y-5 ">
      <h2 className='text-sm lg:text-lg mb-3  leading-2' style={{fontFamily: 'Quicksand, sans-serif'}}>{props.question}</h2>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Type answer"
        id="answerBox"
        autoComplete='off'
        className='h-10 w-52 md:w-96 p-3 rounded-md outline-none text-black'
      />
    </div>
  );
};

export default Card;


