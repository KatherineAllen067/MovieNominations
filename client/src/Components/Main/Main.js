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
    //search word/words 
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
                //set the results to the data from the request
                setSearchResult(res.data.Search || [])
                          
                })
                .catch(error=>{console.log("there is an error with search", error)})
            }               
        
        const addMovie=(id)=>{
            //create array to manipulate state
            let nominees= [...nominationList];
            //find the selected id in the search results and move it to the nomination
            let selected = searchResult.find(m => m.imdbID === id); 
            //check if selected is in the array before pushing to array so there are no double nominations
                if(nominees.indexOf(selected) == -1){
                    nominees.push(selected);
                    setNominationList([...nominees]) 
                }         
        }

        const removeMovie=(id)=>{
            //create array to manipulate state
            let nominees= [...nominationList];
            //find id in the nomlist
            for(var i=0; i < nominees.length; i++){
                //if the deselected matches the nominees index id then remove it
                if(nominees[i].imdbID === id){
                    nominees.splice(i, 1)
                    //update state with the deleted nomination
                    setNominationList([ ...nominees])
                }else console.log("movie id not found")
            }
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