import React, { useState, useEffect } from 'react';
import GetPokemons from '../hooks/pokemonList.js';
import { NavLink } from 'react-router-dom';

const List = () => {
    const { pokemons, setPage, page} = GetPokemons();
    console.log(pokemons)

    const nextPage = () => {
        return setPage(page => page + 20)
    }

    const prevPage = () => {
        return page === 0 ? setPage(0) : setPage(page => page - 20)
    }

    return (
        <>
        {pokemons && (
            <ul>
        {pokemons.results.map((result) => {
                return (            
                        <li key={result.name}>
                            <NavLink to={`/pokemon/${result.name}`}>{result.name}</NavLink>
                        </li>         
                )
            })}
            </ul>
        )
        }
        <div>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
        </>
    )
}

export default List
