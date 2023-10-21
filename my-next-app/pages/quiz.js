import React, { useState } from 'react';
import '../styles/style.css';

function QuizPage() {
  const [score, setScore] = useState(0);
  const [questionLabel, setQuestionLabel] = useState('Loading...');
  const [answer, setAnswer] = useState('');

  const checkAnswer = (event) => {
    event.preventDefault();
    // 여기에 답안을 확인하는 로직을 추가하세요.
    // 예를 들어, 답안이 올바르면 점수를 증가시킬 수 있습니다.
    // setScore(prevScore => prevScore + 1);
  };

  return (
    <div className="quiz-container">
      <h2 id="question-title">Question</h2>
      <form id="quiz-form" onSubmit={checkAnswer}>
        <label htmlFor="answer" id="question-label">{questionLabel}</label>
        <input 
          type="text" 
          name="answer" 
          id="answer" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <div id="score">Score: {score}</div>
    </div>
  );
}

export default QuizPage;
