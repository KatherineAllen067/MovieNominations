import React from 'react';
import '../../styles/component-styles/Nominate.scss';

function Nominate(props){
    //set the value of the nomination button to the movie iD
    //two states true/false
    //when true button says remove and movie is put in nomination list
    //when button is false says nominate movie is not apart of nomination list
    return(
        <>
        <button className="delete" 
        value={props.movie} 
        // onSubmit={movieHandler(props.movie)}
        >
            Nominate
        </button>
        </>
    );
}

export default Nominate;