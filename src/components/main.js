import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Info from './infopage.js';
import '../app-css/main.css'
import Home from './home.js';
import List from './list.js';
import logo from '../images/pokemon-23-logo-png-transparent.png'
import Loading from './loading.js'

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
                    <li><NavLink className="section" to="/info">Info</NavLink></li>
                    <li><NavLink className="section" to="/">List</NavLink></li>
                </ul>
            </div>
        <header>
            <div className="menu">
                <button className="menu-button" type="button" onClick={() => setDisplayModal(true)}>Menu</button>
            </div>

            
            <NavLink to="/">
                <img className="title" alt="Pokedex" src={logo}></img>
            </NavLink>
            

            <div className="search-bar">  
                    <input className="search-input" type="search" placeholder="Search Pokemon" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>    
                    <NavLink to={`/pokemon/${searchTerm.toLowerCase()}`}> 
                    <button className="search-button" type="button" onClick={() => setPokemonName(searchTerm.toLowerCase())}>Search</button>
                    </NavLink>
            </div>
        </header>

        <Switch>
            <Route path="/" exact>
                <List/>
            </Route>

            <Route path='/pokemon/:name' exact>
                <Home />
            </Route>

            <Route path="/info" exact>
                <Info/>
            </Route>
        </Switch>
        <div className={`overlay ${displayModal ? "show": ""}`}
        onClick={() => setDisplayModal(false)}
        ></div>
        <footer>
            <div className="navigation">
                <span>Navigate: </span>
                <span><NavLink className="navigation-link" to="/info">Info </NavLink></span>
                <span><NavLink className="navigation-link" to="/">List </NavLink></span>
            </div>
            
            <div className="logos">
                <a href="https://github.com/Alfred021/React-Pokedex" target="_blank" rel="noreferrer"><span><img className="logo-image" alt="github" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png" width="35px" height="35px"></img></span></a>
                <a href="https://www.linkedin.com/in/alfredo-david-medina-lugo-177b461b4/" target="_blank" rel="noreferrer"><span><img className="logo-image" alt="linkedin" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" width="35px" height="35px"></img></span></a>
                <a href="mailto: alfred.med.barca.9@gmail.com"><span><img className="logo-image" alt="email" src="https://icons-for-free.com/iconfiles/png/512/mail+message+new+send+icon-1320166532032442575.png" width="35px" height="35px"></img></span></a>
            </div>
        </footer>
        </Router>
    )
}

export default Main
