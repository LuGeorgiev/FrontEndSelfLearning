import React, { Component } from 'react';
import Wellcome from './components/Wellcome'
import Timer from './components/Timer'
import './App.css';

// function Wellcome(prop){
//   return <h1>Wellcome {prop.message}!</h1>
// }

// class Wellcome extends Component {
//   render(){
//     let message = this.props.message ||'Customers'
//     return <h1>Wellcome {this.props.message}!</h1>
//   }
// }

class App extends Component {
  render() {
    let wellcomeProps = {
      title:"Hi!",
      subtitle:"from Me"
    }

    return (
      <div className="App">  
        <Wellcome message = ''/>
        <br/>
        <Timer />    
        <Wellcome title ="Hello" subtitle='From React'/>
        <Wellcome {...wellcomeProps}/>
      </div>
    );
  }
}

export default App;
