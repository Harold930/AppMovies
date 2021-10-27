
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';
// import pokemon from './pokemon.module.css';

export default function CardMovie(props){
    console.log(props.movie)
    return (
        <div >
            <h3>{props.movie.name}</h3>
            <Link to = {`detail/${props.movie.id}`} > 
                <img src={`${BASE_URL}/${props.movie.poster}`}  width="180" height="180" alt="Dont found" />
            </Link>
            {/* <div className={pokemon.font}>
                {props.pokemon.types.map((type,i) => (
                    <li key = {i}>{type}</li>
                ))}
            </div> */}
        </div>
    )
}