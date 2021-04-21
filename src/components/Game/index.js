import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "../Board";
import styled from "styled-components";
import Square from "../Square";

const CurrentGameStatusButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  width: 10em;
  border: 2px solid palevioletred;
  border-radius: 0.5em;
  cursor: pointer;
  outline: none;
  background-color: snow;
  font-weight: 800;
  margin-bottom: 0.5em;
`;

const ListItem = styled.li`
    list-style:none;
`;

const ResultTitle = styled(CurrentGameStatusButton)`
  display: block;
  margin: 1em auto;
  font-size: 1.5em;
  border: none;
  cursor: none;
`;

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.splice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
      setStepNumber(step);
      setXisNext(step % 2 === 0);
  };

  const renderMoves = () => (
     
    history.map((_step, move) => {
      const destination = move ? `Go to move# ${move}` : "Go to start";
      return (
        <ListItem key={move}>
          <CurrentGameStatusButton onClick={() => jumpTo(move)}>
            {destination}
          </CurrentGameStatusButton>
        </ListItem>
      )
    })
  )

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div>
        <ResultTitle>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </ResultTitle>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
