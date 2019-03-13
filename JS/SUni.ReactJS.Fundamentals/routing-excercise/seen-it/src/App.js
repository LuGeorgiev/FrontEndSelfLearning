import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import './App.css';
import './styles/site.css'

import Header from './components/common/Header';
import Home from './components/home/Home';
import Notification from './components/common/Notification'

class App extends Component {
  render() {
    return (
      <div className="App">
       < Header />
       < Notification />
       < Route path='/' exact component = {Home}/>
      </div>
    );
  }
}

export default App;
