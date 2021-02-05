import React, { useEffect, useState } from 'react';
import { getPokemonFromList } from '../service/service.js';

const GetPokemons = () => {
    const [pokemons, setPokemons] = useState(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const pokemonList = async () => {
            const info = await getPokemonFromList(page)
            return setPokemons(info)
        }
        pokemonList();   
    }, [page])

    return {pokemons, setPage, page}
}

export default GetPokemons
