import React, { useState } from 'react';


const Card = (props) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  
  };

  return (
    <div className="card space-y-5">
      <h2 className='text-xl mb-3' style={{fontFamily: 'Nosifer, sans-serif'}}>{props.question}</h2>
      <input
        type="text"
        value={answer}
        onChange={handleInputChange}
        placeholder="Type answer"
        id="answerBox"
        className='h-10 w-64 p-3 rounded-md outline-none'
      />
    </div>
  );
};


export default Card;
