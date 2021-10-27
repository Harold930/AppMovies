import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastestMovies, getPopular, getTopRated } from '../../Redux/actions.js';
import CardsMovies from '../CardsMovies/CardsMovies.js';
import home from './home.module.css';

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

    if(Array.isArray(movies)){
    return (
        <div>
            <div className={home.contain}>
                <div>
                <button onClick={handleClick} name='popular' >PELÍCULAS MÁS POPULARES</button>
                </div>
                <div>
                <button onClick={handleClick} name='top-rated'>PELÍCULAS MEJOR CALIFICADAS</button>
                </div>
                <div>
                <button onClick={handleClick} name='reset'>PELÍCULAS MÁS RECIENTES</button>
                </div>
            </div>
            <CardsMovies movies={movies}/>
        </div>
    )
    } else {
        return(
            <div>
               {movies.msg}
               <div>
               <button onClick={handleClick} name='popular' >PELÍCULAS MÁS POPULARES</button>
           </div>
           <div>
               <button onClick={handleClick} name='top-rated'>PELÍCULAS MEJOR CALIFICADAS</button>
           </div>
           <div>
               <button onClick={handleClick} name='reset'>PELÍCULAS MÁS RECIENTES</button>
           </div>
            </div>
        )
    }
}

