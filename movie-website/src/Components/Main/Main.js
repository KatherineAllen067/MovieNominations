import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
import Search from '../Search/Search.js';
import NominationList from '../NominationList/NominationList.js';
import DefaultPoster from '../../styles/assets/images/vhs-background.jpg';
var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";

function Main(){
    const [ word, setWord ] = useState('');
    //the list of search results
    const [ searchResult, setSearchResult ] = useState([]); 
    //the list of nominations 
    const [ nominationList, setNominationList ] = useState([]);

    const findMovie = (event) =>{
        event.preventDefault();
        console.log(`submitting new title ${word}`)
        //make request with the search title
        axios.get(`${request}${word}${KEY}`)
            .then(res=>{
                // console.log(res.data.Search)
                //set the results to the data from the request if it has the word in the title
                setSearchResult(res.data.Search || [])
                          
                })
                .catch(error=>{console.log("there is an error with search", error)})
                console.log(searchResult)
            }               

    const selectNewMovie=(id)=>{
        let nominees= [];
        let selected = searchResult.find(m => m.imdbID === id)
        console.log(selected) 
            nominees.push(selected);
            setNominationList([...nominationList, ...nominees])   
            console.log(nominationList)
    }

    const removeMovie=(id)=>{
        //check for the id in the nomination List
        //if the id is in the nomination list show remove button
        //click to splice the nomination List/nominees array and remove the movie from the list
    }

    return(
        <>
        <Search 
            submitAction={findMovie}
            movieSearch={word}
            setMovieSearch={setWord}
        />
        <div className="lowerPage">
            <div className="result">
                <div className="result-column">
                    {searchResult.map(m=>(
                        <Result
                            key={uuid()}
                            id={m.imdbID}  
                            title={m.Title}
                            year={m.Year}
                            poster={m.Poster ==="N/A" ?
                                DefaultPoster:
                                m.Poster}
                            movieFunction={selectNewMovie}  
                            nominationList={nominationList}                       
                        />))}
                </div> 
            </div>
            <div className="nominate">
                {nominationList.map(n=>(
                    <NominationList 
                        key={uuid()}
                        id={n.imdbID}
                        title={n.Title}
                        year={n.Year}
                        poster={n.Poster ==="N/A" ?
                                DefaultPoster:
                                n.Poster}
                        movieFunction={selectNewMovie}
                        nominationList={nominationList}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Main;