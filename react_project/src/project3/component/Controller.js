import React, { useState } from "react";
import "./Controller.css";

function Controller({ countNum, countReset, handleUndo }) {
  const [flyNumber, setFlyNumber] = useState(null);

  const handleClick = (e, value) => {
    countNum(value);
    setFlyNumber(value);
    setTimeout(() => {
      setFlyNumber(null);
    }, 900);
  };

  return (
    <div className="controller">
      {flyNumber !== null && <div className="fly-number">{flyNumber}</div>}
      <button onClick={e => handleClick(e, -100)}>-100</button>
      <button onClick={e => handleClick(e, -10)}>-10</button>
      <button onClick={e => handleClick(e, -1)}>-1</button>
      <button onClick={() => countReset(0)}>0</button>
      <button onClick={e => handleClick(e, 1)}>+1</button>
      <button onClick={e => handleClick(e, 10)}>+10</button>
      <button onClick={e => handleClick(e, 100)}>+100</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}

export default Controller;
