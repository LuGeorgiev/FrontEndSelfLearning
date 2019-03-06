import React, {Component} from 'react';

export default class ItemForm extends Component{
    constructor(props){
        super(props)

        this.state={
            itemName : "",
            error:''
        }
    }

    onInputChanged=(event)=>{
        this.setState({
            itemName:event.target.value
        })
    }

    onItemSaved =(event)=>{
        event.preventDefault();
        //check if empty
        if (!this.state.itemName) {
            this.setState({
                error:'Item name cannot be empty'
            })
            return;
        }
        this.props.addItem(this.state.itemName);
    }
    
    render(){
        return(
            <form onSubmit={this.onItemSaved}>
                <span>{this.state.error}</span>
                Item Name:
                <input
                type="text"
                name = "name"
                onChange={this.onInputChanged}
                value = {this.state.itemName}
                />
                <br/>
                <input
                type="submit"
                />
            </form>
        )
    }
}