import React from 'react';

function Drawing({ lines }) {
  let pathData = ""
  lines.map((line, index) => (
    pathData = "M " + line.map(p => (
      `${p.get('x')} ${p.get('y')}`)).join(" L ")))
  
  console.log(pathData)
  
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <path
          key={index}
          className="path"
          d={"M " + line.map(p => (
            `${p.get('x')} ${p.get('y')}`)).join(" L ")}
        />
      ))}
      </svg>
  )
}

export default Drawing;



