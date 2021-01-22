import React, { useState } from 'react';
import GetPokemonData from '../hooks/pokemonData.js';
import { useParams } from 'react-router-dom';
import '../pokemon.css';

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
                        <img src={result.sprites.front_default} alt="pokemon"></img>
                    </div>

                    <div className="pokemon-info">
                        <div className="pokemon-attributes">
                            <div>
                                <p>Height</p>
                                <span>{`${result.height / 10} m`}</span>
                                <p>Weight</p>
                                <span>{`${result.weight / 10} kg`}</span>
                            </div>

                            <div>
                                <p>Types: </p>
                                    {result.types.map((type) => {
                                        return (
                                        <p>{type.type.name}</p>
                                        )
                                    })}
                            </div>

                            <div>
                                <p>Skills:</p>
                                    {result.abilities.map((ability) => {
                                        return (
                                            <p>{ability.ability.name}</p>
                                        )
                                    })}
                            </div>
                        </div>
                    

                        <div className="pokemon-stats">
                            <p>Stats:</p>
                            <ul style={{"listStyleType" : "none"}}>
                                {result.stats.map((stat) => {
                                    return (
                                    <li>{`${stat.stat.name}: ${stat.base_stat}`}</li>
                                    )
                                })}
                            </ul>
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
