import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider/Slider';
import Characters from './components/Characters/Charackters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React components</h1>
        <Slider/>
        <Characters/>
      </div>
    );
  }
}

export default App;
