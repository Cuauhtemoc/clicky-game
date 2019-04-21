import React from 'react';

function Card (props) {

    return (
        <div className="card">
            <img 
                className="card-img" 
                alt="pokemon" 
                src={props.src} 
                id={props.id} 
                onClick={event => props.handleClick(props.id)}>
            </img>
        </div>
    )
}
export default Card;