export const getPokemon = async (name) => {
    const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    return apiResp.json()
}

export const getPokemonList = async (url = 'https://pokeapi.co/api/v2/pokemon/') => {
    const apiResp = await fetch(url)
    return apiResp.json()
}

