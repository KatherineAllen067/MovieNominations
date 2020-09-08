import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";
//need a count for the nominations
//need a nominee selection handler
//match the selected nomination with the request param id so the you know which moive to select
//need the movies nominated from the results to 
function Main(props){
    const[ search, setSearch] = useState('');
    const [ result, setResult] = useState([]); 
    const [ movieid, setMovieid ] = useState('');
    const [ nominate, setNominate ] = useState([]);
    // const history = useHistory();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`submitting new title ${search}` )
        axios.get(`${request}${search}${KEY}`)
        .then(res=>{
            console.log(res.data.Search)
            setResult( res.data.Search || [])
            })
            .catch(error=>{
                console.log('error in GET', error)
            });
    } 
    useEffect (()=>{
        if(movieid){
            axios.get(`${request}${search}${KEY}`)
            .then(res=>{
                var select = res.data.Search.find(movie=> movie.imdbID === movieid)
                setNominate([...nominate,{
                    select,                 
                }])
            })
            console.log(nominate)
        }          
    }, [ movieid, search ])


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
        <div className="lowerPage">
            <div className="result">
            <h2>Search Results</h2>
                <div className="result-column">
                    {result.map(m=>(
                    <Result
                    key={uuid()}
                    id={m.imdbID}  
                    title={m.Title}
                    year={m.Year}
                    poster={m.Poster} 
                    onClick={value=>setMovieid(value)}          
                    />
                    ))}
                </div> 
            </div>
            <div className="nominate">
                <h2>Your Personal Nominations</h2>
                {nominate.map(n=>(
                <div className="nominate__card">
                <h2 key={uuid()}>{n.select.Title}</h2>
                <h3>{n.select.Year}</h3>
                <img src={n.select.Poster} alt="movie poster" className="poster" />
                <button>Delete Nomination</button>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Main;