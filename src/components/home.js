import React, { useState } from 'react';
import GetPokemonData from '../hooks/pokemonData.js';
import { useParams } from 'react-router-dom';

const Home = () => { 
    const { name } = useParams();
    const { pokemon } = GetPokemonData(name)

    return (
        <>
        {pokemon && (
            <div>
                {pokemon.map((result) => {
                    return (
                        <>
                    <div>
                        <p><b>{`No.${result.id} ${result.name}`}</b></p>
                        <img src={result.sprites.front_default} alt="pokemon"></img>
                    </div>

                    <div>
                        <p>Types: </p>
                        <ul style={{"listStyleType" : "none"}}>
                            {result.types.map((type) => {
                                return (
                                <li>{type.type.name}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p>Skills:</p>
                        <ul style={{"listStyleType" : "none"}}>
                            {result.abilities.map((ability) => {
                                return (
                                    <li>{ability.ability.name}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <p>Stats:</p>
                        <ul style={{"listStyleType" : "none"}}>
                            {result.stats.map((stat) => {
                                return (
                                <li>{`${stat.stat.name}: ${stat.base_stat}`}</li>
                                )
                            })}
                        </ul>
                    </div>
                    </>
                    )
                })
                }
            </div>
        )}
        </>
    )
}

export default Home;
