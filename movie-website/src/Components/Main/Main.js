import React, { Component } from "react";
import axios from "axios";
import Header from '../Header/Header.js';
import Search from '../Search/Search.js';
import Result from '../Result/Result.js';
import NominationList from '../NominationList/NominationList.js';

//the value from the search bar is going to be the value used in the axios GET to then get title and year
//target value of the search just getting the title year from the array
//list of movie needs to button to NOMINATE
//make GET request for movie and title>> pass values to nomination as an object 
//POST movie and title to array     
//post request to post for a nomination

class Main extends Component{

    state={
        search: null,
        result: "",
        list:[],
    }

    componentDidMount(){ 
        // const keyword = this.state.search; 
        //  if (keyword){
             axios.get(`http://www.omdbapi.com/?s=batman&apikey=1c650e1b`)
                .then(res=>{
                    let movies = res.data.Search
                    console.log(movies)
                    this.setState({
                        result:movies,    
                    })
                })
                .catch(error=>{
                    console.log('error in GET', error)
                });
    }
    
    render(){

        return(
            <>
            <Header />
            <Search 
            search={this.state.search} 
            result={this.state.result}
            list={this.state.list}
            />
            <Result 
            search={this.state.search} 
            result={this.state.result}
            list={this.state.list}
            />
            <NominationList
            search={this.state.search} 
            result={this.state.result}
            list={this.state.list}
             />
            </>
        )
    }
}

export default Main;