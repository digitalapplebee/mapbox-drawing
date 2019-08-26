import React from 'react';
import { FaRegCircle, FaDrawPolygon, FaTrash } from 'react-icons/fa';

function Button ({ name, event }) {
  return(
    <div
      onClick={event}
    >
      {name === 'Circle' && <FaRegCircle size={26} color="rgb(235, 235, 235)" />}
      {name === 'Polygon' && <FaDrawPolygon size={26} color="rgb(235, 235, 235)" />}
      {name === 'Delete' && <FaTrash size={26} color="rgb(235, 235, 235)" />}
    </div>
  )
}

export default Button;