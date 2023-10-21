import React, { useState } from 'react';

function TreePlantingGame() {
  const [score, setScore] = useState(10);
  const [trees, setTrees] = useState([]);
  const [isPlantingMode, setIsPlantingMode] = useState(false);

  const handlePlantMode = () => {
    if (score >= 1) {
      setIsPlantingMode(true);
    }
  };

  const plantTree = (e) => {
    if (isPlantingMode) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setTrees([...trees, { x, y, age: 0 }]);
      setScore(score - 1);
      setIsPlantingMode(false);
    }
  };

  return (
    <div>
      <h1>Planting Tree Game</h1>
      <p>Seeds: {score}</p>
      <button onClick={handlePlantMode}>Plant a tree (Cost: 10)</button>
      <div className="forest" onClick={plantTree}>
        {trees.map((tree, index) => (
          <div key={index} className={`tree age-${tree.age}`} style={{ left: `${tree.x}px`, top: `${tree.y}px` }} ></div>
      ))}
      </div>
    </div>
  );
}

export default TreePlantingGame;