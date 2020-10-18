import React from 'react';
import '../../styles/component-styles/Nominate.scss';

function Nominate({ movie, movieHandler, nominationList }){
    
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