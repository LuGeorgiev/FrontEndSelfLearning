import React, {Component} from 'react';

export default class ButtonWithClick extends Component {

    onButtonClicked = (event) =>{
        //alert('Event!');
        console.log(this.props.name);
        console.log(event.target);
    }

    render(){
        return(
            <button onClick={this.onButtonClicked}>
            {/* <button onClick={this.onButtonClicked.bind(this)}>  if not arrow used*/}
            
                Click me!
            </button>
        )
    }
}