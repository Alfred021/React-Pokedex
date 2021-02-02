import GetPokemonData from '../hooks/pokemonData.js';


const Preview = ({name}) => {
    const { pokemon } = GetPokemonData(name)

    return (
        <>
        {pokemon && (   
            <div>
            
                {pokemon.map((result) => {
                    return (
                    <>
                    <figure className="preview-figure">
                        <img className="pokemon-pic" alt={result.name} src={result.sprites.front_default}></img>
                    </figure>
                    <p className="pokemon-name">{`#${result.id } ${result.name}`}</p>  
                    </>
                    )
                })}
            
            </div> 
        )}

        </>
    )
}

export default Preview
