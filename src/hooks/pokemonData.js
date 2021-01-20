import React, { useEffect, useState } from 'react';
import { getPokemonInfo } from '../service/service.js';

const GetPokemonData = (name, timeout) => {
    const [pokemon, setPokemon] = useState([]);
    console.log(pokemon)
    useEffect(() => {
        const pokeTimeout = setTimeout(async () => {
            if (name) {
                setPokemon(null)
                try {
                    const data = await getPokemonInfo(name)
                    setPokemon([data]);
                } catch(e){
                    console.log(e)
                }
            } else {
                setPokemon(null)
            }       
        }, timeout);
        return () => {
            clearTimeout(pokeTimeout)
        }
    }, [name, timeout])

    return { pokemon };
}

export default GetPokemonData;

/* useEffect(() => {
    const pokeTimeout = setTimeout(async () => {
        if (name) {
            setPokemon(null)
            try {
                const data = await getPokemonInfo(name)
                setPokemon([data]);
            } catch(e){
                console.log(e)
            }
        } else {
            setPokemon(null)
        }       
    }, timeout);
    return () => {
        clearTimeout(pokeTimeout)
    } */
