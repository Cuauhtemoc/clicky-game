import React from 'react';

function Header(props){
    return (
        <header className="border border-dark mx-auto bg-primary">
            <h1>Clicky Game</h1>
            <p>
                {props.headerMessage}
            </p>
        </header>
    )
}
export default Header;