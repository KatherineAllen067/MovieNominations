import React from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';

const NominationList = ({ movieFunction, poster, year, title, id, nominationList }) =>{
        //list of movies nominated
        //check remove because when nominations are full function doesn't fire
        return(
          <>
            {/* <button
                className="delete"
                value={id}
                onClick={ nominationList.length <= 4 ? ()=>movieFunction(id):
                console.log("nominations full") } >
            Remove
            </button> */}
          </>
        );
}

export default NominationList;