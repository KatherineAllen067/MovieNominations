import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
import Search from '../Search/Search.js';
// import NominationList from '../NominationList/NominationList.js';
import DefaultPoster from '../../styles/assets/images/vhs-background.jpg';
import Carousel from 'react-bootstrap/Carousel'

var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";

function Main(){
    //search word/words 
    const [ word, setWord ] = useState('');
    //the list of search results
    const [ searchResult, setSearchResult ] = useState([]); 
    //the list of nominations 
    const [ nominationList, setNominationList ] = useState([]);
    console.log(nominationList)
    
    
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
            };               
        
        const addMovie=(id)=>{
            //create array to manipulate state
            let nominees= [...nominationList];
            //find the selected id in the search results and move it to the nomination
            let selected = searchResult.find(m => m.imdbID === id); 
            //check if selected is in the array before pushing to array so there are no double nominations
                if(nominees.indexOf(selected) === -1){
                    nominees.push(selected);
                    setNominationList([...nominees]) 
                }      
        };

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
        };

    return(
        <>
                <Carousel>
                    {nominationList.map(n=>(
                    <Carousel.Item 
                    className="nominee"
                    key={uuid()} >
                        <img 
                        src={n.Poster ==="N/A" ? DefaultPoster: n.Poster}
                        alt="movie poster"/>
                        <Carousel.Caption>
                            {n.Title}
                            {n.Year}
                        </Carousel.Caption>
                        <button
                        className="delete"
                        value={n.imdbID}
                        onClick={ nominationList.length <= 4 ? ()=>removeMovie(n.imdbID) : console.log("nominations full") } >
                        Remove
                        </button>
                    </Carousel.Item> ))}
                </Carousel>
            
            <Search 
                submitAction={findMovie}
                movieSearch={word}
                setMovieSearch={setWord}
            />
            <div className="result">
                {searchResult.map(m=>(
                    <Result
                        key={uuid()}
                        id={m.imdbID}  
                        title={m.Title}
                        year={m.Year}
                        poster={m.Poster ==="N/A" ?
                            DefaultPoster: m.Poster}
                        movieFunction={addMovie}  
                        nominationList={nominationList}                   
                    />))}
            </div> 
        </>
        )
}

export default Main;