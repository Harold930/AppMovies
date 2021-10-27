
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMoviesByName } from '../../Redux/actions';
// import nav from './nav.module.css';
import icono from '../../img/lupa.webp';

export default function Nav(){

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSearch  (e) {
        e.preventDefault();
        dispatch(getMoviesByName(name));
        setName('');
    }

    function handleCLick(e){
        e.preventDefault();
        dispatch(getMoviesByName(name));
        setName('')
    }

    return(
        <nav>
           <NavLink to = '/'  style={{ textDecoration: 'none' }}>
                <h1>HOME</h1>
           </NavLink>
           <div>
                <button onClick={handleCLick} ></button>
                <input type="text" placeholder='Buscar por nombre' value={name}  onChange={handleChange} onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)} />
           </div>
        </nav>
    )
}

{/* <NavLink to={`/home/pokemons/search?name=${name}`} style={{ textDecoration: 'none' }}><img src={icono} className={nav.button}/></NavLink> */}