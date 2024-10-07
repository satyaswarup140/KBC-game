import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const MainScreen = ({ gameURL, question, options, correctAnswer, handleNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userName, setUserName] = useState(''); // To store the name entered by the user
  const [isJoined, setIsJoined] = useState(false); // To track if user has joined the game

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return; // Do nothing if no answer selected

    setIsAnswered(true);
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    handleNextQuestion(); // Call parent to go to the next question
  };

  const handleJoinGame = () => {
    if (userName.trim()) {
      setIsJoined(true); // Mark as joined once the name is entered
    } else {
      alert("Please enter your name to join the game.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
      <h1>KBC Game</h1>

      {/* QR Code section using QRCodeCanvas */}
      <QRCodeCanvas value={gameURL} size={128} />
      <p>Scan the QR code to join the game</p>

      {/* Input for the user to join the game */}
      {!isJoined ? (
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ padding: '5px', marginRight: '10px' }}
          />
          <button
            onClick={handleJoinGame}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Join Game
          </button>
        </div>
      ) : (
        <p>Welcome, {userName}! You have joined the game.</p>
      )}

      {/* Game content - only visible if user has joined */}
      {isJoined && (
        <div style={{ margin: '20px 0' }}>
          <h2>{question}</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelect(option)}
                style={{
                  backgroundColor: selectedAnswer === option ? 'lightgray' : 'white',
                  padding: '10px',
                  margin: '5px',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Answer handling */}
      {isAnswered ? (
        <div>
          {isCorrect ? <p>Correct!</p> : <p>Incorrect! The correct answer is: {correctAnswer}</p>}
          <button onClick={handleNext}>Next Question</button>
        </div>
      ) : (
        isJoined && (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Submit Answer
          </button>
        )
      )}
    </div>
  );
};

export default MainScreen;
