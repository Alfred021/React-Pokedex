import React, { useEffect, useState } from 'react';
import { getPokemonInfo } from '../service/service.js';

const GetPokemonData = (pokemonName) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const data = async () => {
            if (pokemonName) {
                setLoading(true);
                setError(null)
                setPokemon(null)

            try {
                const data = await getPokemonInfo(pokemonName)
                setPokemon([data]);
            } catch(error) {
                setError(error)
            }
                setLoading(false)
            } else {
                setPokemon(null)
                setError(null)
            }
        }
        data();
    }, [pokemonName])

    return { pokemon, loading, error };
}

export default GetPokemonData;
