import React, { useState, useEffect } from 'react';
import GetPokemons from '../hooks/pokemonList.js';
import { NavLink } from 'react-router-dom';
import Preview from './pokemon-preview.js';
import '../app-css/results.css';

const List = () => {
    const { pokemons, setPage, page} = GetPokemons();

    const nextPage = () => {
        return setPage(page => page + 20)
    }

    const prevPage = () => {
        return page === 0 ? setPage(0) : setPage(page => page - 20)
    }

    return (
        <>
        <section className="pokemon-results">
            {pokemons && (
                <ul className="results" style={{"height" : "auto"}}>
            {pokemons.results.map((result) => {
                    return (            
                            <li className="list" key={result.name}>
                                <NavLink to={`/pokemon/${result.name}`}>
                                    <Preview name={result.name}/> 
                                </NavLink>
                            </li>         
                    )
                })}
                </ul>
            )
            }
        </section>
        
        <div className="navigate-pages">
            <span onClick={prevPage}>Prev</span>
            <span onClick={nextPage}>Next</span>
        </div>
        </>
    )
}

export default List
