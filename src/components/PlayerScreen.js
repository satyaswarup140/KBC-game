import React, { useState } from 'react';

function PlayerScreen({ currentQuestion, submitAnswer }) {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    submitAnswer(name, answer);
    setAnswer('');
  };

  return (
    <div>
      {!name ? (
        <div>
          <h3>Enter your name:</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={answer === option}
                onChange={(e) => setAnswer(e.target.value)}
              />
              {option}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
}

export default PlayerScreen;
