import React, { useEffect } from 'react';
import CardMovie from '../CardMovie/CardMovie.js';
// import pokemons from './pokemons.module.css';

export default function CardsMovies(props){

    return (
        <div>
        {props.movies.map((movie,i) => (
                <CardMovie movie={movie} key = {i}/>
        ))}
    </div>
    )

}