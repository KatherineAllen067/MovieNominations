import React from "react";
import '../../styles/component-styles/Result.scss';

function Result ({ title, year, poster, id, movieFunction, nominationList, showModal }){
    //list of results that come from search
    return(
        <>
         <div className="result-cell">
            <img src={poster} alt="movie poster" className="result-cell__poster"/>
            <h3 className="result-cell__title">{title}</h3>
            <h3 className="result-cell__year">{year}</h3>
            <button 
                className="delete" 
                value={id} 
                onClick={ nominationList.length <= 4 ? ()=>{movieFunction(id)}: showModal }>
            Nominate
            </button>
        </div> 
        </>   
    )
}  

export default Result;