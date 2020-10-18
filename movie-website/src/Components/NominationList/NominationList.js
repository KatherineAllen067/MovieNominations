import React from 'react';
// import Button from '../Nominate/Nominate.js';

function NominationList(props){
    //list of movies nominated
    return(
        <div className="nominate__card">
            <img src={props.poster} 
            alt="movie poster" 
            className="poster" />
            <h2 key={props.key}>{props.title}</h2>
            <h3>{props.year}</h3>
            {/* <Button 
                movie={props.id}
                movieHandler={props.movieFunction} 
                nominationList={props.nominationList} 
            /> */}
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