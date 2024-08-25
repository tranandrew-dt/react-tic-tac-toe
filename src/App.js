import React from "react";
import ReactDom from "react-dom";
import Square from "./Square";

function App() {
  return (
    <div>
      <div className="board-row">
        <Square num="1" />
        <Square num="2" />
        <Square num="3" />
      </div>
      <div className="board-row">
        <Square num="4" />
        <Square num="5" />
        <Square num="6" />
      </div>
      <div className="board-row">
        <Square num="7" />
        <Square num="8" />
        <Square num="9" />
      </div>
    </div>
  );
}

export default App;
