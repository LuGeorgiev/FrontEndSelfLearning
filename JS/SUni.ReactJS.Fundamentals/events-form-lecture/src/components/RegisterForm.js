import React, {Component} from 'react';

export default class RegisterForm extends Component{
constructor(props){
    super(props)
    this.state = {
       user:{
           username:'',
           password:''
       },
       error:''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
}

onInputChanged = (event)=>{
    let user = this.state.user;

    let inputName = event.target.name;
    let inputValue = event.target.value;

    user[inputName] = inputValue;

    this.setState({ user })
}

onFormSubmit (event){
    event.preventDefault();

    //save user to the server
    if(this.state.user.password.length < 6) {
        this.setState({
            error:'Password must be more than 6 symbols!'
        })
        return;
    } else{
        this.setState({
            error:''
        })
    }
    console.log(this.state.user);
}

    render() {
        return (
            <form onSubmit = {this.onFormSubmit}>
                <div className='red-error-msg'>{this.state.error}</div>
                Username:
                <input 
                type="text"
                name = "username"
                value={this.state.user.username}
                onChange={this.onInputChanged}
                />
                <br/>
                Password:
                <input
                type="password"
                name ="password"
                value = {this.state.user.password}
                onChange={this.onInputChanged}               
                />
                <br/>
                <input type="submit" />
            </form>
        )
    }
}