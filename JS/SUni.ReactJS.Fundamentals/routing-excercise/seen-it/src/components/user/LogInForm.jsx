import React, {Component} from 'react';
import requester from '../../infrastructure/requester';
//import '../../infrastructure/observer';
import observer from '../../infrastructure/observer';

export default class LogInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
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

        requester.post('user','login', 'Basic', this.state)
        .then(res=>{
            observer.trigger(observer.events.loginUser,res.username);
            observer.trigger(observer.events.notification, {type:'success', message:"Sucessfully login"})
            sessionStorage.setItem('authtoken', res._kmd.authtoken);
        })
        .catch(res=>
            observer.trigger(observer.events.notification, {type:'error', message:res.responseJSON.description}) );
    }

    render =()=>{
        return(
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text"/>
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password"/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
        )
    }
}