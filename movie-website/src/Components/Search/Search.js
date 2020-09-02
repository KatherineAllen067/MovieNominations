import React, { Component } from "react";
import '../../styles/component-styles/Search.scss';


class Search extends Component{
    // searchKey = (e) => {
    //     e.preventDefault();
    //     let keyword = e.target.value;
    //     this.setState({
    //       search: keyword,
    //     });
    //     console.log(keyword);
    // };
    render(props){


        return(
            <>
                <form>
                    <div className="search-bar">
                        <div className="search">
                        <label className="search-title">Search by Movie Title
                        </label>
                            <input 
                             name="search"
                             type="text"
                             placeholder="What movie would you like to nominate?"
                            //  onChange={this.searchKey}
                             >
                            </input>
                        </div>
                    </div>
                </form>

            </>
            )
    }
}

export default Search;