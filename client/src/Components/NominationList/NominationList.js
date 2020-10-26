import React from 'react';

function NominationList({ movieFunction, poster, year, title, id, nominationList, showModal}){
        //list of movies nominated
        return(
          <>
            <div className="nominee">
                <img 
                src={poster}
                alt="movie poster"
                className="poster"/>
                <h3>{title}</h3>
                <span>{year}</span>
                <button
                    className="delete"
                    value={id}
                    onClick={ nominationList.length <= 5 ? ()=>movieFunction(id) :  console.log('movie list full') } >    
                    Remove
                </button> 
            </div>
          </>
        );
}

export default NominationList;