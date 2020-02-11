import React from 'react';
import './App.css';
import DrawArea from './DrawArea.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Doodling Art Gallery</h1>
        </header>

        < DrawArea />

      </div>
    );
  }
}

export default App 
