import React from 'react';

function Navbar(props){
    return (
        <nav className="nav bg-dark text-light">
            <span  className="navbar-brand">
                <p>Clicky Game </p>
            </span>
            <span className="navbar-text mr-2 text-danger">
                <p>{props.gameMessage}</p>
            </span>
            <span className="navbar-text">
                <p>Score: {props.score} | Top Score: {props.topScore} </p>
            </span>
        </nav>
    )
}

export default Navbar