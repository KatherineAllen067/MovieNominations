import React from 'react';
import '../../styles/component-styles/Nominate.scss';

function Nominate({ movie, movieHandler, nominationList }){
    //set the value of the nomination button to the movie iD
    //two states true/false
    //when true button says remove and movie is put in nomination list
    //when button is false says nominate movie is not apart of nomination list
    return(
        <>
        <button className="delete" 
        value={movie} 
        onClick={ nominationList.length <= 4 ? ()=>{movieHandler(movie)}:
            console.log("nominations full")
        }
        >
            Nominate
        </button>
        </>
    );
}

export default Nominate;