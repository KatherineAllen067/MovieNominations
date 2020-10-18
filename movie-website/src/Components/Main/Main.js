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
//TUESDAY MORNING: nomList & resultList & Nominate button, search all separate components
//check all component functionality 
//where is the flow down and state bubble up
//look at movie handler function it takes a movieId
//console log what each state is getting {}[]""true

function Main(){
    const [ word, setWord ] = useState('');
    const [ searchResult, setSearchResult ] = useState([]); 
    //which movie Id are we adding to the list?
    // const [ movieid, setMovieid ] = useState('');
    //the list of nominations 
    const [ nominationList, setNominationList ] = useState([]);
    //is nominated or not nominated? true/false value 
    // const [ nominee, setNominee ] = useState(false);

    //if title is selected setNominee to true and disable button
    //push object from search Result to nominationList 

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

    // useEffect (()=>{
    //     //if there is a movieId then using the search find that movie and the exact id
    //     //put that movie into the nomination list
    //     if(movieid){
    //         console.log(movieid)
    //         axios.get(`${request}${search}${KEY}`)
    //         .then(res=>{
    //             //filter through data and show all that is the movieId ?? should this be find instead...
    //             var select = res.data.Search.filter(movie => movie.imdbID === movieid)
    //             setNominate([...nominate,{
    //                 select,               
    //             }])
    //             console.log(nominate)
    //         })
    //     }          
    // }, [ movieid, search ])

    // const handleDelete =(evt, value)=>{
    //     evt.preventDefault();
    //     //delete a movie from the nomination list on click
    // }
    //

    //need to make the array not move the selected when the length it 4
    //on submit/click find the movie id from the search results and push that movie object to nomination list 
    //I only want it to move selected to the nominees array if the array length is less than 4 
    const selectNewMovie=(id)=>{
        let nominees= [];
        let selected = searchResult.find(m => m.imdbID === id)
        console.log(selected) 
            nominees.push(selected);
            setNominationList([...nominationList, ...nominees])   
            console.log(nominationList)
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