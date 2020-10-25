import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

function NominationList(props){
    //list of movies nominated
    return(
        <div className="nominate__card">
            <img src={props.poster} 
            alt="movie poster" 
            className="poster" />
            <h2>{props.title}</h2>
            <h3>{props.year}</h3>
            <button
                className="delete"
                movie={props.id}
                onClick={()=>{props.movieFunction(props.id)}}
            >
            Remove</button>
        </div>
    );
}

export default NominationList;