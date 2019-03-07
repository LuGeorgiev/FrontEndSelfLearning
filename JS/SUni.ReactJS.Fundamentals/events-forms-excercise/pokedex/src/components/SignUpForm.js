import React, {Component}  from 'react';

class SignUpForm extends Component  {
    constructor(){
        super();
        this.state = {
            form:{

            }
        };        
    }
    handleChnage = (event)=>{
        const name  = event.target.dataset.name
        const value = event.target.value;
        const newObj = {};
        newObj[name]=value;
        console.log(name, value);
        this.setState({
            form:Object.assign(this.state.form, newObj)
        });
    }

    render(){
        return(
        <form className="offset-md-1">
            <div className="form-group">
                <label htmlFor="input-email">Email address</label>
                <input data-name="email" type="email" onChange={this.handleChnage} className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="input-username">Username</label>
                <input data-name="name" type="text" onChange={this.handleChnage} className="form-control" id="input-username" aria-describedby="emailHelp" placeholder="Username"/>
            </div>
            <div className="form-group">
                <label htmlFor="input-password">Password</label>
                <input data-name="password" type="password" onChange={this.handleChnage} className="form-control" id="input-password" placeholder="Password"/>
            </div>           
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
    }
}    


export default SignUpForm;