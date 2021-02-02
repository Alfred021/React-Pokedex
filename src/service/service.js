import { getPokemon, getPokemonList } from '../api/api.js';
import { 
    savePokemonListOnStorage,
    savePokemonOnStorage, 
    getPokemonFromStorage, 
    getPokemonListFromStorage 
    } from '../storage/storage.js';

export const getPokemonFromList = async (page) => {
    try {
        return getPokemonListFromStorage("page " + page)
    } catch(e) {
        const pokemonList = await getPokemonList(page)
        savePokemonListOnStorage("page " + page, pokemonList)
        return pokemonList;
    }  
}

export const getPokemonInfo = async (name) => {
    try {
        return getPokemonFromStorage(name)
    } catch (e) {
        let pokemon = await getPokemon(name)
        savePokemonOnStorage(name, pokemon)
        return pokemon;
    }
}
