import React from "react";
import '../../styles/component-styles/Result.scss';
import {Link} from "react-router-dom";

function Result (props){
    // console.log(props.id)
    return(

        <div className="result-column">
            <img src={props.poster} alt={props.title} className="result-poster"/>
            <h2>{props.title}</h2>
            <h2 className="year">{props.year}</h2>
            <Link to={"/"+props.id}>
            <button type="submit" className="search__movie--save">
            NOMINATE
            </button>
            </Link>
        </div>
    )
}


    

export default Result;