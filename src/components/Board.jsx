//app just renders board
//board needs state of all 9 squares, whether x or o
//state of player turn (or whether x or o is next
//maybe a map to render all three rows instead of hardcoding lmao
//how is a winner determined? Is there a way to search the combinations of the squares??
// hope i don't have to hard-code win conditions...
// I mean i guess it's just all hori, verti, and the two diags (3+3+2)
// If i know who is next, can't i show an onHover of their icon on empty squares?
//...shit also look fugly atm

import React, { useState } from "react";
import ReactDom from "react-dom";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function updateBoard(id, player) {
    setBoard((prev) => {
      const newBoardState = [...prev];
      newBoardState[id] = player;
      calculateWinner(newBoardState);
      return newBoardState;
    });
  }

  function handleCurrentPlayer() {
    setCurrentPlayer((prev) => {
      return prev === "X" ? "O" : "X";
    });
  }

  function calculateWinner(board) {
    console.log(board);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  //TODO fix later with complex states
  return (
    <div>
      <div className="board-row">
        <Square
          id="0"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="1"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="2"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
      </div>
      <div className="board-row">
        <Square
          id="3"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="4"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="5"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
      </div>
      <div className="board-row">
        <Square
          id="6"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="7"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
        <Square
          id="8"
          player={currentPlayer}
          handleCurrentPlayer={handleCurrentPlayer}
          updateBoard={updateBoard}
          board={board}
        />
      </div>
    </div>
  );
}

export default Board;
