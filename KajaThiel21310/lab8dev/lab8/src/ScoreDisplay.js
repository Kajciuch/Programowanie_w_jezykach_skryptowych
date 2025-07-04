import React, { useState } from 'react';
import './App.css';

function ScoreDisplay() {
  const questions = [
    { id: 1, question: "Panda wielka to ssak?", correct: "tak" },
    { id: 2, question: "Panda czerwona to typ misia?", correct: "nie" },
    { id: 3, question: "Pandy żyją w Europie?", correct: "nie" },
    { id: 4, question: "Panda żywi się głównie bambusem?", correct: "tak" },
    { id: 5, question: "Panda to zwierzę drapieżne?", correct: "tak" },
  ];

  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    let result = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) result++;
    });
    setScore(result);
    setShowScore(true);
  };

  let message = '';
  if (score <= 1) {
    message = 'ZA MAŁO PUNKTÓW';
  } else if (score <= 3) {
    message = 'W SAM RAZ';
  } else {
    message = 'SUPER WYNIK!';
  }

  return (
    <div className="card">
      <h3>Mini quiz: Co wiesz o pandach?</h3>

      {!showScore ? (
        <>
          {questions.map(q => (
            <div key={q.id} className="question-block">
              <p>{q.question}</p>
              <label>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="tak"
                  onChange={() => handleAnswer(q.id, 'tak')}
                />{' '}
                Tak
              </label>{' '}
              <label>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value="nie"
                  onChange={() => handleAnswer(q.id, 'nie')}
                />{' '}
                Nie
              </label>
            </div>
          ))}

          <button onClick={handleSubmit} className="btn">
            Sprawdź wynik
          </button>
        </>
      ) : (
        <div>
          <p>Zdobytę punkty: {score}/5</p>
          <p><strong>{message}</strong></p>
        </div>
      )}
    </div>
  );
}

export default ScoreDisplay;
