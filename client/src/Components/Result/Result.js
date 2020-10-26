import React from "react";
import '../../styles/component-styles/Result.scss';

function Result (props){
    //list of results that come from search
    return(
        <>
         <div className="result-cell">
            <img src={props.poster} alt="movie poster" className="result-cell__poster"/>
            <h3 className="result-cell__title">{props.title}</h3>
            <h3 className="result-cell__year">{props.year}</h3>
            <button 
                className="delete" 
                value={props.id} 
                onClick={ props.nominationList.length <= 4 ? ()=>{props.movieFunction(props.id)}: 
                    console.log("nominations full") }>
            Nominate
            </button>
        </div> 
        </>   
    )
}  

export default Result;