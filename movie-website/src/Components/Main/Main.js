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
    //word search for
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
        
        const addMovie=(id)=>{
            //create array to manipulate state
            let nominees= [];
            //find the selected id in the search results and move it to the nomination
            let selected = searchResult.find(m => m.imdbID === id); 
            nominees.push(selected);
            //update state
            setNominationList([...nominationList, ...nominees])   
            console.log(nominationList);
            console.log(nominees);
        }

        const removeMovie=(id)=>{
            //create array to manipulate state
            let nominees= [];
            //find id in the nomlist
            //delselected being recognized 
            let deselected = nominationList.find(movie => movie.imdbID === id)
            console.log(deselected)
            //i have the movie I want to remove i need to remove it from the state and update state
            for(var i=0; i < nominees.length; i++){
                //if the deselected matches the nominees index id then remove it
                if(nominees[i].imdbID === deselected){
                    nominees.splice(i, 1)
                    setNominationList([...nominationList, ...nominees])
                }
            }
            //check for the id in the nomination List       
            //remove the deselected from the nominationList 
            //then set new nomination list
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
                            movieFunction={addMovie}  
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
                        movieFunction={removeMovie}
                        nominationList={nominationList}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default Main;