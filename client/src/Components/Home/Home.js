import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastestMovies, getPopular, getTopRated } from '../../Redux/actions.js';
import CardsMovies from '../CardsMovies/CardsMovies.js';

export default function Home(){
    
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies);
    console.log(movies,'<<---soy lo que sta en el ompomenenten home');
   
    useEffect(()=>{
        dispatch(getLastestMovies());
    },[dispatch]);

    function handleClick(e){
        e.preventDefault();
        if(e.target.name === 'popular'){
            dispatch(getPopular());
        }
        if(e.target.name === 'top-rated'){
            dispatch(getTopRated());
        }
        if(e.target.name === 'reset'){
            dispatch(getLastestMovies());
        }
    }

    if(movies.length !== 0){
    return (
        <div>
            <h2> PELICULAS </h2>
            <div>
               <button onClick={handleClick} name='popular' >PELICULAS MAS POPULARES</button>
           </div>
           <div>
               <button onClick={handleClick} name='top-rated'>PELICULAS MEJOR CALIFICADAS</button>
           </div>
           <div>
               <button onClick={handleClick} name='reset'>REINICIAR</button>
           </div>
            <CardsMovies movies={movies}/>
        </div>
    )
    } else {
        return(
            <div>
                NO SE ENCONTRARON RESULTADOS
            </div>
        )
    }
}

