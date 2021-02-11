import React, { useState, useEffect } from 'react';
import GetPokemons from '../hooks/pokemonList.js';
import { NavLink } from 'react-router-dom';
import Preview from './pokemon-preview.js';
import '../app-css/results.css';
import Loading from './loading.js'

const List = () => {
    const { pokemons, setPage, page, error, loading } = GetPokemons();

    const nextPage = () => {
        return setPage(page => page + 20)
    }

    const prevPage = () => {
        return page === 0 ? setPage(0) : setPage(page => page - 20)
    }

    return (
        <>

        <section className="pokemon-results">

        <ul className="results" style={{"height" : "auto"}}>
            {loading && <Loading/>}

            {error && (
                <div className="error-container">
                    <h3 className="error-title">Something when wrong, please try again</h3>
                    <p className="error-text sub-title">Please return to the previous page or reload the page</p>
                </div>
            )}

            {pokemons && (
                    <>
            {pokemons.results.map((result) => {
                    return (            
                            <li className="list" key={result.name}>
                                <NavLink className="link-to-pokemon" to={`/pokemon/${result.name}`}>
                                    <Preview name={result.name}/> 
                                </NavLink>
                            </li>         
                    )
                })}
                </> 
            )
            }
             </ul>
        </section>
        
        <section className="pagination">
            <div className="navigate-pages">
                <span onClick={prevPage}>Prev</span>
                <span onClick={nextPage}>Next</span>
            </div>
        </section>
        </>
    )
}

export default List
