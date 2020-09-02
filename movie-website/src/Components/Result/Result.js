import React, { Component } from "react";
import { v4 as uuid } from 'uuid';


class Result extends Component{
    render(props){
        console.log(this.props.result)
        // let searchResult = this.props.result;
        // console.log(searchResult)
        return(
        <>
            <h1> Search Results</h1>  
            <div className="results">
                {/* { 
                searchResult.map(m=>{
                    return( <ResultList
                    key={uuid()}
                    title={m.Title}
                    year={m.Year}
                    />
                    )
                })}    */}
            </div>
        </>
        )
    }
}

function ResultList(props){
    return(
        <div>
            {/* <h2>{props.title}</h2>
            <h2>{props.year}</h2> */}
            <button type="submit" 
                className="search__movie--save"
                onClick={this.publishNew}>
                NOMINATE
            </button>
        </div>
    )
}

export default Result;