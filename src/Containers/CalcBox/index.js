import React from 'react';
import { ONE_THOUSAND } from '../../utils/constants';
import { setSquareFormat } from '../../utils'
import "./index.css";

function CalcBox({ square }) {

  const convertMtoKM = () => {
    return setSquareFormat((square / ONE_THOUSAND));
  };

  return (
    <div className="calculation-box">
      <p>Area of figures: {convertMtoKM()} km</p>
    </div>
  );
}

export default CalcBox;
