import React, { useState } from "react";

//If state of square (from board) is occupied, don't allow overwrite, and don't switch to the other player
//each square needs to keep track of its state, whether it's empty or has X or O

function Square(props) {
  const [clickedStatus, setClickedStatus] = useState(false);

  function handleClickedStatus() {
    const winnerDeclared = props.calculateWinner(props.board);
    if (winnerDeclared != null) {
      return; // Disable the Board
    }
    if (!clickedStatus) {
      props.updateBoard(props.id, props.player);
      props.handleCurrentPlayer();
      setClickedStatus(true);
    }
  }

  return (
    <button className="square" onClick={handleClickedStatus}>
      {clickedStatus && props.board[props.id]}
    </button>
  );
}

export default Square;
