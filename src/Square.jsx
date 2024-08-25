import React, { useState } from "react";

function Square(props) {
  const [clickStatus, setClickStatus] = useState(false);

  function handleClickStatus() {}

  return (
    <button className="square" onClick={handleClickStatus}>
      {props.num}
    </button>
  );
}

export default Square;
