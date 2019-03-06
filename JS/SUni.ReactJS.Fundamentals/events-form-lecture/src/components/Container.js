import React, {Component} from 'react';
import List from './List';
import ItemForm from './ItemForm';

export default class Container extends Component{
    constructor(props){
        super(props)

        this.state={
            items:[]
        }
    }

    addItem=(name)=>{
       this.setState(prevState=>{
        let items = prevState.items
        items.push({
            id:items.length+1,
            name
        })
        return{
            items
        }
       })
    }
    render(){
        return(
            <div>
                <h1>MY Page</h1>
                <List items = {this.state.items}/>
                <ItemForm addItem = {this.addItem}/>
            </div>
        )
    }
}