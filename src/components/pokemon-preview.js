import GetPokemonData from '../hooks/pokemonData.js';
import Loading from './loading.js'

const Preview = ({name}) => {
    const { pokemon, loading } = GetPokemonData(name)

    return (
        <>

        <div>

        {loading && <Loading/>}

        {pokemon && (   
            <>
                {pokemon.map((result) => {
                    return (
                    <>
                    <figure className="preview-figure">
                        <img className="pokemon-pic" alt={result.name} src={result.sprites.front_default}></img>
                    </figure>
                    <h5 className="pokemon-name">{`#${result.id } ${result.name}`}</h5>  
                    </>
                    )
                })}
            </>
        )}
        </div> 
        </>
    )
}

export default Preview
