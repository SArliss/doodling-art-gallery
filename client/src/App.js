import React from 'react';
import './App.css';

//custom components
import DrawArea from './Components/DrawArea.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className="App">

        <Header />

        <DrawArea />

        <Footer />

      </div>
    );
  }
}

export default App 
