import React from "react";

function Search({submitAction, movieSearch, setMovieSearch}){

    return(
    <form onSubmit={submitAction}>
        <div className="search">
            <div className="search__bar">
                <label className="title">
                    Search by Title
                </label>
                <input 
                    type="text"
                    value={movieSearch}
                    placeholder="Movie Title"
                    onChange={e=>setMovieSearch(e.target.value)}
                >
                </input>
                <button type="submit" className="delete">Find Title</button>
            </div>
        </div>
    </form>
    );
}
export default Search; 