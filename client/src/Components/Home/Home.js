import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastestMovies } from '../../Redux/actions.js';
import CardsMovies from '../CardsMovies/CardsMovies.js';

export default function Home(){
    
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies);
    console.log(movies,'<<---soy lo que sta en el ompomenenten home');

    useEffect(()=>{
        dispatch(getLastestMovies());
    },[dispatch]);

    if(movies.length !== 0){
    return (
        <div >

       <h2> MOVIES </h2>
            <CardsMovies movies={movies}/>
        </div>
    )
    } else {
        return(
            <div>
                HELOLOOO
            </div>
        )
    }
}

