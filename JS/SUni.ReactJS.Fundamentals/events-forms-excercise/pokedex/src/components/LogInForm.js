import React, {Component}  from 'react';

class LogInForm extends Component  {
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
        this.setState({
            form:Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/auth/login',
        {
          method:'POST',
          body: JSON.stringify(this.state.form) ,
          headers:{
              'Content-Type':'application/json'
          } 
        })
        .then(data => data.json())
        .then(res => {
            if (res.success && res.token) {
                localStorage.setItem("token", res.token);
                this.props.setLoggedIn();
            }
        })
        .catch(err=>console.log(err))
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
                <label htmlFor="input-password">Password</label>
                <input data-name="password" type="password" onChange={this.handleChnage} className="form-control" id="input-password" placeholder="Password"/>
            </div>           
            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </form>
        )
    }
}    


export default LogInForm;