import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";

function Main(props){
    const[ search, setSearch] = useState('');
    const [ result, setResult] = useState([]); 
    const [ movieid, setMovieid ] = useState('');
    const [ nominate, setNominate ] = useState([]);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`submitting new title ${search}` )
        axios.get(`${request}${search}${KEY}`)
        .then(res=>{
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
        }          
    }, [ movieid, search ])

    const handleDelete =(evt, value)=>{
        evt.preventDefault();
        for (let i=0; i <nominate.length; i++){
           if( i.imdbID === value){
               nominate.splice(i, 1)
           }
        return
       }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="search">
                <div className="search__bar">
                <label className="title">
                Search by Title
                </label>
                <input 
                type="text"
                value={search}
                placeholder="Movie Title"
                onChange={e=>setSearch(e.target.value)}
                >
                </input>
                <button type="submit" className="delete">Find Title</button>
                </div>
            </div>
        </form>
        <div className="lowerPage">
            <div className="result">
            <h2 className="title">Search Results</h2>
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
            <div className="nominate">{
            nominate.length < 5 ?
            <h2 className="title">Your Personal Nominations</h2> : 
            <h2 className="title">Your Nominations are Full</h2>
            }
                {nominate.map(n=>(
                <div className="nominate__card">
                <h2 key={uuid()}>{n.select.Title}</h2>
                <h3>{n.select.Year}</h3>
                <img src={n.select.Poster} alt="movie poster" className="poster" />
                <button value={n.select.imdbID} onSubmit={handleDelete}
                 className="delete">Delete Nomination</button>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Main;