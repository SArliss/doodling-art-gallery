import React, { Component } from 'react';

class Drawing extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  
  render() {
    return (
      
        <svg className="drawing">
          {this.props.lines.map((line, index) => (
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
}

export default Drawing;



 