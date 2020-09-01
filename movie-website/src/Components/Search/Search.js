import React, { Component } from "react";
import '../../styles/component-styles/Search.scss';


class Search extends Component{


    //get request to movie with a search Poster, Year, Title

    //post request to post for a nomination
    render(){
        return(
            <>
            <div className="search-bar">
                <form>
                <div className="search">
                <label className="search-title">Search for Movies to Nominate
                </label>
                    <input name="search__movie" placeholder="What movie would you like to nominate?">
                    </input>
                    <div className="search__movie">
                        <button type="submit" className="search__movie--save">NOMINATE</button>
                        <button type="submit" className="search__movie--cancel">CANCEL</button>
                    </div>
                </div>
                </form>
            </div>
            
            </>
        )
    }
}

export default Search;