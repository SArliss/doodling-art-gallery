import React from 'react';
import DrawingLine from './DrawingLine.js'

function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing;



