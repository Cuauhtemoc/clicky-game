import React from 'react';

function Navbar(props){
    return (
        <nav className="nav">
            <span  className="navbar-brand col-4">
                <p>Clicky Game </p>
            </span>
            <span className="navbar-text col-3">
                <p>{props.message}</p>
            </span>
            <span className="navbar-text col-3">
                <p>Score: {props.score} | Top Score: {props.topScore} </p>
            </span>
        </nav>
    )
}

export default Navbar