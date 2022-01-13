import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="card">
      <div className="board">
        <div className="cells">
          <Cell value="_" />
          <Cell value="_" />
          <Cell value="_" />

          <Cell value="_" />
          <Cell value="_" />
          <Cell value="_" />

          <Cell value="_" />
          <Cell value="_" />
          <Cell value="_" />
        </div>
      <button className="resetButton">Reset</button>
      </div>

    </div>
  );
};

export default Board;
