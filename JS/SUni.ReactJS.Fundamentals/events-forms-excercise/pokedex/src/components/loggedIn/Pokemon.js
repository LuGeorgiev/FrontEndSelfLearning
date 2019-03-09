import React, {Component}  from 'react';

const Pokemon = props =>(
    <div>
        <h1>{props.item.pokemonName}</h1>
        <p>{props.item.pokemonInfo}</p>
        <img src={props.item.pokemonImg} alt="Img"/>
    </div>
);  


export default Pokemon;