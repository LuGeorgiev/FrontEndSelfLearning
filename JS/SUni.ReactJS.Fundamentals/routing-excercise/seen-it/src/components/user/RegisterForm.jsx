import React, {Component} from 'react';
import requester from '../../infrastructure/requester';
//import '../../infrastructure/observer';
import observer from '../../infrastructure/observer';

export default class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    handleChange = event =>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({
            [fieldName]:fieldValue
        })
    }

    handleSubmit = event =>{
        event.preventDefault();

        requester.post('user','', 'Basic', this.state)
        .then(res => {
            observer.trigger(observer.events.loginUser, res.username);
            sessionStorage.setItem('authtoken',res._kmd.authtoken);
        })
    }

    render =()=>{
        return(
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password" type="password" onChange={this.handleChange}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" onChange={this.handleChange}/>
                <input id="btnRegister" value="Sign Up" type="submit" />
             </form>
        )
    }
}