import React from 'react';
import Button from '../Nominate/Nominate.js';

function NominationList(props){
    return(
        <div className="nominate__card">
            <h2 key={props.key}>{props.title}</h2>
            <h3>{props.year}</h3>
            <img src={props.poster} 
            alt="movie poster" 
            className="poster" />
            <Button />
        </div>
    );
}

export default NominationList;