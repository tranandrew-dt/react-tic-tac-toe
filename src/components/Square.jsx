import React, { useState } from "react";

//If state of square (from board) is occupied, don't allow overwrite
//each square needs to keep track of its state, whether it's empty or has X or O

function Square(props) {
  const [clickStatus, setClickStatus] = useState(false);

  function handleClickStatus() {
    props.handleCurrentPlayer();
    setClickStatus(true);
  }

  function handlePlayer() {
    console.log("Props: " + props.player);
    const thisPlayer = props.player;
    console.log("This: " + thisPlayer);
  }

  return (
    <button
      className="square"
      onClick={() => {
        props.handleBoard(props.id, props.player);
      }}
    >
      {clickStatus && "X"}
    </button>
  );
}

export default Square;
