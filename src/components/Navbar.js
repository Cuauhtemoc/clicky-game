import React from 'react';

function Navbar(props){
    return (
        <nav className="row nav bg-dark text-light">
            <span  className="col-4 navbar-brand align-self-center">
                Clicky Game
            </span>
            <span className={`col-3 navbar-text mr-2 text-${props.textStyle} align-self-center`}>
                {props.gameMessage}
            </span>
            <span className="col-4 navbar-text align-self-center”">
                Score: {props.score} | Top Score: {props.topScore} 
            </span>
        </nav>
    )
}

export default Navbar