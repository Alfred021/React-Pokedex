import React, { useEffect, useState } from 'react';
import { getPokemonInfo } from '../service/service.js';

const GetPokemonData = (pokemonName) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const data = async () => {
            const data = await getPokemonInfo(pokemonName)
            return setPokemon([data]);
        }
        data();
    }, [pokemonName])

    return { pokemon };
}

export default GetPokemonData;
