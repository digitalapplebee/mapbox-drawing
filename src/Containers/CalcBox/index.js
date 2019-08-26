import React from "react";
import "./index.css";

function CalcBox({ square }) {
  return (
    <div className="calculation-box">
      <p>Square figures: {square} m</p>
    </div>
  );
}

export default CalcBox;
