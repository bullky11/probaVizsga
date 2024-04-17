import React, { useState } from 'react';
import '../styles.css'; 

function KerdesKartya({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="question-card">
      <h3>{question.kerdes}</h3>
      <ul>
        <li>
          <button
            className={selectedAnswer === question.v1 ? 'selected' : ''}
            onClick={() => handleAnswerClick(question.v1)}
          >
            {question.v1}
          </button>
        </li>
        <li>
          <button
            className={selectedAnswer === question.v2 ? 'selected' : ''}
            onClick={() => handleAnswerClick(question.v2)}
          >
            {question.v2}
          </button>
        </li>
        <li>
          <button
            className={selectedAnswer === question.v3 ? 'selected' : ''}
            onClick={() => handleAnswerClick(question.v3)}
          >
            {question.v3}
          </button>
        </li>
        <li>
          <button
            className={selectedAnswer === question.v4 ? 'selected' : ''}
            onClick={() => handleAnswerClick(question.v4)}
          >
            {question.v4}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default KerdesKartya;
