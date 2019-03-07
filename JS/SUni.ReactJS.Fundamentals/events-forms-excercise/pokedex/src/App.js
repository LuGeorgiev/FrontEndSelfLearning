import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import SignnUpForm from './components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">        
          <SignnUpForm />
      </div>
    );
  }
}

export default App;
