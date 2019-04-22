import React from 'react';

function Card (props) {

    return ( 
        <div className="card">
            <img 
                className="card-img border border-dark p-3 img-fluid " 
                alt="pokemon" 
                src={props.src} 
                id={props.id} 
                onClick={event =>{
                if(props.img.clicked)
                {
                    props.reset()
                }
                else
                {
                    props.handleClick(props.id)}
                }
                }>
            </img>
        </div>
    )
}
export default Card;