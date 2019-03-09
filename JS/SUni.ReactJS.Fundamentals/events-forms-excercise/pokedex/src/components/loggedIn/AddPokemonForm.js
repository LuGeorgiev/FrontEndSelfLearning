import React, {Component}  from 'react';

class AddPokemonForm extends Component  {
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
        fetch('http://localhost:5000/pokedex/create',
        {
          method:'POST',
          body: JSON.stringify(this.state.form) ,
          headers:{
              'Content-Type':'application/json'
          } 
        })
        .then(data => data.json())
        .then(res => {
            // if (res.success && res.token) {
            //     localStorage.setItem("token", res.token);
            //     this.props.setLoggedIn();
            // }
            this.props.updateRoster(res);
        })
        .catch(err=>console.log(err))
    }
   
    render(){
        return(
        <form className="offset-md-1">
        <h1>Create pokemon</h1>
            <div className="form-group">
                <label htmlFor="input-pokename">Pokemon name</label>
                <input data-name="pokemonName" type="text" onChange={this.handleChnage} className="form-control" id="input-pokename" aria-describedby="emailHelp" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="input-pokeImg">Pokemon image</label>
                <input data-name="pokemonImg" type="text" onChange={this.handleChnage} className="form-control" id="input-pokeImg" aria-describedby="emailHelp" placeholder="Enter image url"/>
              
            </div>
            <div className="form-group">
                <label htmlFor="input-pokeInfo">Pokemon info</label>
                <input data-name="pokemonInfo" type="text" onChange={this.handleChnage} className="form-control" id="input-pokeInfo" placeholder="Enter bio"/>
            </div>           
            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
        </form>
        )
    }
}    


export default AddPokemonForm;