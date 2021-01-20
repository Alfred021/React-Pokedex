import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Info from './infopage.js';
import './main.css'
import Home from './home.js';

const Main = () => {
    const [displayModal, setDisplayModal] = useState(false)

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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/info">Info</NavLink></li>
                </ul>
            </div>
        <header>
            <button className="menu" type="button" onClick={() => setDisplayModal(true)}>Menu</button>
            <h1>Pokedex</h1>
        </header>

        <Switch>
            <Route path="/" exact>
                <Home/>
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
