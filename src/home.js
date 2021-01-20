import React, { useState } from 'react';
import GetPokemonData from './hooks/pokemonData.js';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { pokemon } = GetPokemonData(searchTerm, 1000)

    console.log(pokemon)

    return (
        <>
        <div>
            <input type="search" placeholder="Search Pokemon" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>
            <button type="search">Search</button>
        </div>

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
