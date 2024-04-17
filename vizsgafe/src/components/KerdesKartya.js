import React from 'react';

function KerdesKartya({ question }) {
  return (
    <div className="question-card">
      <h3>{question.kerdes}</h3>
      <ul>
        <li>{question.v1}</li>
        <li>{question.v2}</li>
        <li>{question.v3}</li>
        <li>{question.v4}</li>
      </ul>
    </div>
  );
}

export default KerdesKartya;
