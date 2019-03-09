import React, {Component}  from 'react';
import AddPokemonForm from './AddPokemonForm';
import Pokemon from './Pokemon';

class LoggedInScreen extends Component  {
    constructor(){
        super();
        this.state = {
            pokeArr:[]
        };        
    }
    updateRoster=(newRoster)=>{
        this.setState({
            pokeArr:newRoster
        })
    }

    componentDidMount(){
       fetch('http://localhost:5000/pokedex/pokedex')
       .then(rawData =>rawData.json())
       .then(response =>this.setState({
           pokeArr:response.pokemonColection
       }))
   }
    render(){
        return(
        <div>
            < AddPokemonForm updateRoster = {this.updateRoster}/>
            {this.state.pokeArr.map((pokemon,index)=> <Pokemon key={index} item={pokemon} />)}
        </div>
        )
    }
}    


export default LoggedInScreen;