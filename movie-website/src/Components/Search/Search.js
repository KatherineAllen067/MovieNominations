import React from "react";

function Search(props){

    return(
    <form onSubmit={props.submitAction}>
        <div className="search">
            <div className="search__bar">
                <label className="title">
                    Search by Title
                </label>
                <input 
                    type="text"
                    value={props.movieSearch}
                    placeholder="Movie Title"
                    onChange={e=>props.setMovieSearch(e.target.value)}
                >
                </input>
                <button type="submit" className="delete">Find Title</button>
            </div>
        </div>
    </form>
    );
}
export default Search; 