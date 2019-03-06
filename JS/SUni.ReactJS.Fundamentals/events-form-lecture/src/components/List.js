import React, {Component} from 'react';


export default class List extends Component{


    render(){
        let items = this.props.items ||[];

        // let items = [
        //     {id:1, name: 'Ivan'},
        //     {id:2, name: 'MArin'},
        //     {id:3, name: 'Petq'},
        //     {id:4, name: 'Vihra'},
        //     {id:5, name: 'John Dow'},
        // ]
        return(
            <ul>
                {items
                    .map(i=><li key={i.id} >{i.name}</li>)}
            </ul>
        )
    }
}