import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import axios from "axios";
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
import Search from '../Search/Search.js';
import NominationList from '../NominationList/NominationList.js';
var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";
//TUESDAY MORNING: nomList & resultList & Nominate button, search all separate components
//check all component functionality 
//where is the flow down and state bubble up
//look at movie handler function it takes a movieId
//console log what each state is getting {}[]""truth

function Main(){
    //what are we searching for?
    const [ search, setSearch ] = useState('');
    //what is the result of the search array
    const [ result, setResult ] = useState([]); 
    //which movie Id are we adding to the list?
    const [ movieid, setMovieid ] = useState('');
    //the list of nominations 
    const [ nominate, setNominate ] = useState([]);
    //is nominated or not nominated? true/false value 
    const [ nominee, setNominee ] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`submitting new title ${search}`)
        //make request with the search title
        axios.get(`${request}${search}${KEY}`)
        .then(res=>{
            console.log(res.data.Search)
            //set the results to the data from the request
            setResult( res.data.Search || [])
            console.log(result)
            })
                .catch(error=>{
                    console.log('error in GET', error)
                });
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

    const handleDelete =(evt, value)=>{
        evt.preventDefault();
        //delete a movie from the nomination list on click
    }

    const handleNewMovie=(id)=>{
        setMovieid(id);
    }

    return(
        <>
        <Search 
            submitAction={handleSubmit}
            movieSearch={search}
            setMovieSearch={setSearch}
        />
        <div className="lowerPage">
            <div className="result">
            <h2 className="title">Search Results</h2>
                <div className="result-column">
                    {/* {result.map(m=>(
                        <Result
                            key={uuid()}
                            id={m.imdbID}  
                            title={m.Title}
                            year={m.Year}
                            poster={m.Poster} 
                            movieHandler={handleNewMovie()}                         
                    />))} */}
                </div> 
            </div>
            <div className="nominate">
                {
                    nominate.length < 5 ?
                    <h2 className="title">Your Personal Nominations</h2> : 
                    <h2 className="title">Your Nominations are Full</h2>
                }
                {/* {nominate.map(n=>(
                    <NominationList 
                        key={uuid()}
                        id={n.select.imdbID}
                        title={n.select.Title}
                        year={n.select.Year}
                        poster={n.select.Poster}
                        movieHandler={handleNewMovie()}
                    />
                ))} */}
            </div>
        </div>
        </>
    )
}

export default Main;