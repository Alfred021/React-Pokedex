import React, { useState } from 'react';
import GetPokemonData from '../hooks/pokemonData.js';
import { useParams } from 'react-router-dom';
import '../app-css/pokemon.css';

const Home = () => { 
    const { name } = useParams();
    const { pokemon } = GetPokemonData(name)

    return (
        <>
        {pokemon && (
            <section className="pokemon-body">
                {pokemon.map((result) => {
                    return (
                        <>
                    <div className="pokemon-card">
                        <p><b>{`No.${result.id} ${result.name}`}</b></p>
                        <div className="pokemon-image-container">
                            <img className="pokemon-image" src={result.sprites.front_default} alt="pokemon"></img>
                        </div>
                    </div>

                    <div className="pokemon-info">
                        <div className="pokemon-attributes">
                            <div className="attributes-column-1">
                                <ul className="attibutes-list-1">
                                    <li>
                                        <p className="attribute-title">Height</p>
                                        <span className="attribute-value">{`${result.height / 10} m`}</span>
                                    </li>

                                    <li>
                                        <p className="attribute-title">Weight</p>
                                        <span className="attribute-value">{`${result.weight / 10} kg`}</span>
                                    </li>

                                    <li>
                                        <p className="attribute-title">Types: </p>
                                        <ul className="attibutes-list-1">
                                        {result.types.map((type) => {
                                            return (
                                            <li className="types">
                                                <p className={type.type.name}>{type.type.name}</p>
                                            </li>
                                            )
                                        })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="attributes-column-2">
                                <ul className="attibutes-list-2">
                                    <li>
                                <p className="attribute-title">Skills:</p>
                                    {result.abilities.map((ability) => {
                                        return (
                                            <p className="skill">{ability.ability.name}</p>
                                        )
                                    })}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    

                        <div className="pokemon-stats">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Base Stats</th> 
                                    </tr>   
                                </thead>
                                <tbody>
                                <tr>
                                    {result.stats.slice(0, 2).map((stat) => {
                                        return (
                                       <td>
                                           <p>{stat.stat.name}</p>
                                           <p>{stat.base_stat}</p>
                                        </td> 
                                       )
                                    })}
                                </tr>
                                                                  
                                <tr>
                                    {result.stats.slice(2, 4).map((stat) => {
                                        return (
                                        <td>
                                           <p>{stat.stat.name}</p>
                                           <p>{stat.base_stat}</p>
                                        </td> 
                                       )
                                    })}
                                </tr>

                                <tr>
                                    {result.stats.slice(4, 6).map((stat) => {
                                        return (
                                        <td>
                                           <p>{stat.stat.name}</p>
                                           <p>{stat.base_stat}</p>
                                        </td> 
                                       )
                                    })}
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </>
                    )
                })
                }
            </section>
        )}
        </>
    )
}

export default Home;
