import React, { useState } from 'react';

function TreePlantingGame() {
  const [score, setScore] = useState(0);
  const [trees, setTrees] = useState([]);

  const plantTree = () => {
    if (score >= 10) {
      setTrees([...trees, { age: 0 }]);
      setScore(score - 10);
    }
  };

  return (
    <div>
      <h1>나무 심기 게임</h1>
      <p>점수: {score}</p>
      <button onClick={plantTree}>나무 심기 (비용: 10점)</button>
      <div className="forest">
        {trees.map((tree, index) => (
          <div key={index} className={`tree age-${tree.age}`}></div>
        ))}
      </div>
    </div>
  );
}

export default TreePlantingGame;