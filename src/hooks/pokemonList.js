import React, { useEffect, useState } from 'react';
import { getPokemonFromList } from '../service/service.js';

const GetPokemons = () => {
    const [pokemons, setPokemons] = useState(null);
    const [page, setPage] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const pokemonList = async () => {
            if (page >= 0) {
                setLoading(true)
                setError(null)
                setPokemons(null)
                try {
                    const info = await getPokemonFromList(page)
                    setPokemons(info)
                } catch(error) {
                    setError(error)
                }
                setLoading(false)
            } else {
                setPokemons(null)
                setError(null)
            }            
        }
        pokemonList();   
    }, [page])

    return { pokemons, setPage, page, error, loading }
}

export default GetPokemons
