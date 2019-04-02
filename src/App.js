import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import iphone from './iphone.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="Heading">VIP customer</h1>
        <img className="Img" src={iphone} alt="" />
      </div>
    );
  }
}

export default App;
