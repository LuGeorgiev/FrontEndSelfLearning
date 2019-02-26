import React, {Component} from 'react';

class Button extends Component{    //constructor is needed for state
    constructor(props){ //If we have constructor PROPS have to be passed to super
        super(props)

        this.buttonClicked = this.buttonClicked.bind(this);
        this.state ={
            count:0,
            isOn: false
        }
    }
    buttonClicked(){
         this.setState( prevState=>({
             count: prevState.count+1,
             isOn: !prevState.isOn
         }))
    }
    render(){
        return(
        <button onClick={this.buttonClicked} disabled={this.state.isOn}>
            {this.props.text} - was clicked {this.state.count} times!
            {this.state.isOn ? 'On' : 'OFF'}
        </button>
        )
    }
}

export default Button;