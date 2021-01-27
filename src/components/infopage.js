import pokedex from '../images/1066177-ashpokedex2.png';
import '../app-css/info.css';

const Info = () => {
    return (
        <section className="pokedex-info">
            <div className="intro">
                <h2>Pokédex</h2>
                <p>The Pokédex (ポケモン図鑑 Pokemon Zukan) is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the Pokédex.</p>
            </div>

            <div className="pokedex-image-container">
                <figure className="pokedex-figure">
                    <img alt="pokedex" src={pokedex}></img>
                    <figcaption>
                        Kanto Pokedex
                    </figcaption>
                </figure>
            </div>
            
            <div className="features">
                <h3>Features</h3>
                <h4>The Pokédex can...</h4>

                <ul>
                    <li>Identify Pokémon</li>
                    <li>Scan Poké Balls (Sinnoh, anime)</li>
                    <li>Identify battle moves</li>
                    <li>Show where to capture Pokémon (in-game)</li>
                </ul>
            </div>
        </section>
    )
}

export default Info
