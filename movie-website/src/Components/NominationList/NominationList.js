import React from 'react';
import Button from '../Nominate/Nominate.js';

function NominationList(props){
    //list of movies nominated
    return(
        <div className="nominate__card">
            <img src={props.poster} 
            alt="movie poster" 
            className="poster" />
            <h2 key={props.key}>{props.title}</h2>
            <h3>{props.year}</h3>
            <Button 
                movie={props.id}
                onClick={movieHandler(props.id)}  
            />
        </div>
    );
}

export default NominationList;