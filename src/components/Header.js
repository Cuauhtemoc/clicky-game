import React from 'react';

function Header(props){
    return (
        <header className="row border border-dark bg-primary">
            <h1>
                {props.headerMessage}
            </h1>
        </header>
    )
}
export default Header;