import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
import NominationList from '../NominationList/NominationList.js';
var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";

function Main(props){
    const[ search, setSearch] = useState('');
    const [ result, setResult] = useState([]);
    // const [nominees, setNominees] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`submitting new title ${search}` )
        axios.get(`${request}${search}${KEY}`)
        .then(res=>{
            console.log(res.data.Search)
            setResult( res.data.Search)
            })
            .catch(error=>{
                console.log('error in GET', error)
            });

    } 
        // if(prevProps.match.params.movieid !== this.props.match.params.movieid){
        //     const myNomination={
        //         // key={uuid()},
        //         // poster={props.poster},
        //         // title={props.title},
        //         // year={props.year}
        //     }
        //     this.props.list.push(myNomination);
        // }

        return(
            <>
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <div className="search">
                    <label className="search-title">
                        Search by Title
                    </label>
                    <input 
                        type="text"
                        value={search}
                        placeholder="Movie Title"
                        onChange={e=>setSearch(e.target.value)}
                    >
                    </input>
                    </div>
                    <button type="submit" >Find Title</button>
                </div>
            </form>
            <div>
            <h1>Search Results</h1>
            <div className="result-column">
            {result.map(m=>(
                <Result
                key={uuid()}
                poster={m.Poster}
                title={m.Title}
                year={m.Year}
                id={m.imdbID}                   
                />
                ))}
            </div> 
            </div>
            <NominationList />
            </>
        )
}

export default Main;