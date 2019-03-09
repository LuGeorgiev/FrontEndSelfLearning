import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import LoggedInScreen from './components/loggedIn/LoggedInScreen';

class App extends Component {

constructor(){
  super();
  let route = ''
  if (localStorage.getItem('token')) {
    route = 'loggedIn'
  }
  this.state = {
    route:route
  }
  this.switchLoginSignUp = this.switchLoginSignUp.bind(this);
  this.showAppropriateComponet = this.showAppropriateComponet.bind(this);
  this.setLoggedIn = this.setLoggedIn.bind(this);
}
showAppropriateComponet () {
  if(this.state.route==='login'){
    return <LogInForm setLoggedIn={this.setLoggedIn}/> 
  } else if(this.state.route==='loggedIn'){
    return <LoggedInScreen />
  }
  return <SignUpForm />
}

setLoggedIn(){
  this.setState({
    route:'loggedIn'
  })
}

switchLoginSignUp() {
  if(this.state.route==='login'){
      this.setState({
          route:''
      })
  } else {
      this.setState({
          route:'login'
      })
  }
}

  render() {
    return (
      <div className="App"> 
          <button onClick ={this.switchLoginSignUp} className="btn btn-link">Change Login Form</button>       
          {this.showAppropriateComponet()}
      </div>
    );
  }
}

export default App;
