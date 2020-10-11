import React from "react";
import '../../styles/component-styles/Result.scss';

function Result (props){

    //list of results that come from search
    return(
        <>
         <div className="result-column">
            <img src={props.poster}alt="movie poster" className="poster"/>
            <h2>{props.title}</h2>
            <h2 className="year">{props.year}</h2>
            <button value={props.id} onClick={e=>props.onClick(e.target.value)} className="delete">
                NOMINATE
            </button>
        </div> 
        </>   
    )
}  

export default Result;