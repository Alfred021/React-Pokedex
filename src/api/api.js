export const getPokemon = async (name) => {
    const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    return apiResp.json()
}

export const getPokemonList = async (page = 0) => {
    const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`)
    return apiResp.json()
}




