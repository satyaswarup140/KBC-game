import React, { useState } from 'react';
import MainScreen from './components/MainScreen';

const App = () => {
  const questions = [
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['A. Earth', 'B. Mars', 'C. Jupiter', 'D. Venus'],
      correctAnswer: 'B. Mars',
    },
    {
      question: 'What is the capital of France?',
      options: ['A. Paris', 'B. London', 'C. Berlin', 'D. Madrid'],
      correctAnswer: 'A. Paris',
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["A. Charles Dickens", "B. J.K. Rowling", "C. William Shakespeare", "D. Mark Twain"],
      correctAnswer: "C. William Shakespeare"
    },
    {
      question: "What is the square root of 64?",
      options: ["A. 6", "B. 7", "C. 8", "D. 9"],
      correctAnswer: "C. 8"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["A. Michelangelo", "B. Leonardo da Vinci", "C. Picasso", "D. Van Gogh"],
      correctAnswer: "B. Leonardo da Vinci"
      }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('Game over! You have answered all questions.');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <MainScreen
      gameURL={'/path-to-your-qr-code.png'}
      question={currentQuestion.question}
      options={currentQuestion.options}
      correctAnswer={currentQuestion.correctAnswer}
      handleNextQuestion={handleNextQuestion}
    />
  );
};

export default App;
