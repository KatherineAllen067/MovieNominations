import React, { Component } from "react";
import '../../styles/component-styles/Search.scss';


class Search extends Component{
    render(){
        return(
            <>
            <div className="search-bar">
                <label className="search">Search for Movies Here
                </label>
                    <input name="search__movie" placeholder="What movie are you looking for?">
                    </input>
            </div>
            
            </>
        )
    }
}

export default Search;