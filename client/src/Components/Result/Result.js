import React from "react";
import '../../styles/component-styles/Result.scss';
import Button from '../Nominate/Nominate.js';

function Result (props){
    //list of results that come from search
    return(
        <>
         <div className="result-cell">
            <img src={props.poster} alt="movie poster" className="result-cell__poster"/>
            <h3 className="result-cell__title">{props.title}</h3>
            <h3 className="result-cell__year">{props.year}</h3>
            <Button 
                movie={props.id}
                movieHandler={props.movieFunction}
                nominationList={props.nominationList}
            />
        </div> 
        </>   
    )
}  

export default Result;