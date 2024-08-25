import React, { useState } from "react";

//If state of square (from board) is occupied, don't allow overwrite

function Square(props) {
  const [clickStatus, setClickStatus] = useState(false);

  function handleClickStatus() {
    setClickStatus((prev) => {
      return !prev;
    });
  }

  return (
    <button className="square" onClick={handleClickStatus}>
      {clickStatus && props.num}
    </button>
  );
}

export default Square;
