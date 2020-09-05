import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';
import '../../styles/component-styles/Main.scss';
import Result from '../Result/Result.js';
import NominationList from '../NominationList/NominationList.js';
//the value from the search bar is going to be the value used in the axios GET to then get title and year
//target value of the search just getting the title year from the array
//list of movie needs to button to NOMINATE
//make GET request for movie and title>> pass values to nomination as an object 
//POST movie and title to array of search results    
//from the search results target the object by id
//then  update the nominate list by pushing the specifc onject to the list 

var request= "http://www.omdbapi.com/?s=";
var KEY= "&apikey=1c650e1b";
var movie="Star Wars";

class Main extends Component{

    state={ result: [], list:[], search:'', searchSubmit:null }

    searchChange = (e) =>{
        e.preventDefault();
        this.setState({search:e.target.value}) 
    }

    searchEntered =(e)=>{
        e.preventDefault();
        this.setState({searchSubmit:this.state.search})
    }
    
    componentDidMount(){ 

        axios.get(`${request}${movie}${KEY}`)
           .then(res=>{
               let movies = res.data.Search                   
               // console.log(movies)
               this.setState({
                   result:movies,
               })
               })
               .catch(error=>{
                   console.log('error in GET', error)
               });

    }
    componentDidUpdate(prevProps){
        console.log(this.state.result)
        if(prevProps.match.params.movieid !== this.props.match.params.movieid){
            // axios.get(`http://www.omdbapi.com/?s=batman&apikey=1c650e1b`)
            //     .then(results=>{
                    //  const newMovie= this.state.result.filter(n =>{n.imdbID === this.props.match.params.movieid})
                    //  console.log(newMovie)
                    // const nominee ={
                    //         poster: newMovies.Poster,
                    //         title: newMovies.Title,
                    //         year: newMovies.Year
                    //     }

                        // this.setState({
                        //     list: [nominee]
                        // })    
                //  })
        }}
    
    
    render(){

        // addNominee = (e)=>{
        //     e.preventDefault()
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
            <form onSubmit={this.searchEntered}>
                <div className="search-bar">
                    <div className="search">
                    <label className="search-title">
                        Search by Movie Title
                    </label>
                    <input 
                        value={this.state.search}
                        // name="search"
                        type="text"
                        placeholder="Movie Title"
                        onChange={this.searchChange}
                    >
                    </input>
                    </div>
                </div>
            </form>
            <div>
            <h1>Movies Search Results</h1>
            {
                this.state.result.map(m=>{
                    return(
                        <Result
                        key={uuid()}
                        id={m.imdbID}
                        poster={m.Poster}
                        title={m.Title}
                        year={m.Year}
                        list={this.state.list}
                        />
                    )
                })
            }
            </div>
            <NominationList
            // search={this.state.search} 
            // result={this.state.result}
            // list={this.state.list}
             />
            </>
        )
    }
}

export default Main;