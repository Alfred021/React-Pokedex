import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Info from './infopage.js';
import '../main.css'
import Home from './home.js';
import List from './list.js'

const Main = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [pokemonName, setPokemonName] = useState("");

    return (
        <Router>
            <div className={`modal ${displayModal ? "show": ""}`}>
                <div>
                    <h3>Menu</h3>
                    <button className="close" onClick={() => setDisplayModal(false)}>
                        X
                    </button>
                </div>
                <ul style={{"listStyleType" : "none"}}>
                    <li><NavLink to={`/pokemon/:${pokemonName}`}>Home</NavLink></li>
                    <li><NavLink to="/info">Info</NavLink></li>
                    <li><NavLink to="/">List</NavLink></li>
                </ul>
            </div>
        <header>
            <button className="menu" type="button" onClick={() => setDisplayModal(true)}>Menu</button>
            <h1>Pokedex</h1>
            <div>   
                    
                    <input type="search" placeholder="Search Pokemon" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>    
                        <NavLink to={`/pokemon/${searchTerm}`}> 
                        <button type="button" onClick={() => setPokemonName(searchTerm)}>Search</button>
                        </NavLink>
            </div>
        </header>

        <Switch>
            <Route exact path="/">
                <List/>
            </Route>

            <Route path='/pokemon/:name'>
                <Home />
            </Route>

            <Route path="/info">
                <Info/>
            </Route>
        </Switch>
        <div className={`overlay ${displayModal ? "show": ""}`}
        onClick={() => setDisplayModal(false)}
        ></div>
        <footer>
            <p>Linkedin, Github, Mail</p>
        </footer>
        </Router>
    )
}

export default Main
