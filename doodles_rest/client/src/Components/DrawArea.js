import React from 'react';
import Drawing from './Drawing.js';
import CreateDoodle from './CreateDoodle'
import Immutable from 'immutable';

class DrawArea extends React.Component {
  constructor() {
    super();

    this.state = {
      lines: new Immutable.List(),
      isDrawing: false
    }
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseDown = (mouseEvent) => {
    if (mouseEvent.button !== 0) {
      return;
    } else {
      const point = this.relativeCoordinatesForEvent(mouseEvent);
      this.setState(prevState => ({
        lines: prevState.lines.push(new Immutable.List([point])),
        isDrawing: true
      }));
    }
  }

  handleMouseMove = (mouseEvent) => {
    if (!this.state.isDrawing) {
      return;
    } else {
      const point = this.relativeCoordinatesForEvent(mouseEvent);
      this.setState(prevState => ({
        lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
      }));
    }
  }

  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  }

  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  }

  render() {
    let pathData = "";
    this.state.lines.map(line => (
      pathData = "M " + line.map(p => (
        `${p.get('x')} ${p.get('y')}`)).join(" L ")))

    return (
      <div>

        <div
          className="drawArea"
          ref="drawArea"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        >
          <Drawing lines={this.state.lines} />
        </div>

        <div
          className="doodle-form"
        >
          <CreateDoodle lines={pathData} />
        </div>

      </div>
    );
  }
}

export default DrawArea 
