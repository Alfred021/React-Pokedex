export const savePokemonListOnStorage = (url, pokemon) => {
    try {
        localStorage.setItem(url, JSON.stringify(pokemon))
    } catch(e) {
        localStorage.clear()
        localStorage.setItem(url, JSON.stringify(pokemon))
    }
}

export const getPokemonListFromStorage = (url) => {
    const pokemonList = JSON.parse(localStorage.getItem(url))
    if (pokemonList === null) {
        throw new Error("Pokemon List not found in Storage")
    }
    return pokemonList
}

export const savePokemonOnStorage = (name, pokemon) => {
    if (name === undefined) {
        throw new Error("Pokemon Name can't be undefined")
    }
    
    try {
        localStorage.setItem(name, JSON.stringify(pokemon))
    } catch(e) {
        localStorage.clear()
        localStorage.setItem(name, JSON.stringify(pokemon))
    }
}

export const getPokemonFromStorage = (name) => {
   const pokemonInfo = JSON.parse(localStorage.getItem(name));
   if (pokemonInfo === null) {
       throw new Error("Pokemon Info not found in Storage")
   }
   return pokemonInfo;
}
