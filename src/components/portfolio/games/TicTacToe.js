import React, { useEffect, useRef } from 'react';
import './TicTacToe.css'; // Create and import a CSS file for styling

const TicTacToe = () => {
  const cells = useRef([]);
  const coinFlipDisplayBox = useRef(null);
  const winningMessageScreen = useRef(null);
  const winDisplayMessage = useRef(null);
  const restartButton = useRef(null);

  // Rest of your JavaScript code, updated to work with React and useRef

  return (
    <div className="tic-tac-toe-container">
      {/* Add your JSX elements here */}

      <div className="coin-flip">
        <button className="headsTailsButton">Heads</button>
        <button className="headsTailsButton">Tails</button>
        <div id="coinFlipWinnerDisplay" ref={coinFlipDisplayBox}></div>
      </div>

      <div className="game-board">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            data-cell={index}
            ref={(el) => (cells.current[index] = el)}
            className="cell"
          ></div>
        ))}
      </div>

      <div id="winningMessage" ref={winningMessageScreen}>
        <div id="winDisplayMessage" ref={winDisplayMessage}></div>
        <button id="restartButton" ref={restartButton}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;


