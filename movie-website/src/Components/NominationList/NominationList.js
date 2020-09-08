import React from "react";
import '../../styles/component-styles/NominationList.scss';

function NominationList (props){

        return(
            <>
            <h2 className="nomination-header">
            Your Nominations
            </h2>
            <div className="nomination">
                <div className="nomination-card">
                    <img src={props.poster} alt="movie poster" />
                    <h3 className="nomination-title">{props.title}</h3>
                    <span className="nomination-date">{props.year}</span>
                <button type="submit" >DELETE</button>
            </div>
            </div> 
            </>
        )
}

export default NominationList;