import React from "react";
// import { useLocation, useHistory } from 'react-router-dom';
// import queryString from 'query-string';
import '../../styles/component-styles/Result.scss';
// import NominationList from '../NominationList/NominationList.js';

function Result (props){
    // const [nominees, setNominees] = useState([]);
    // const [movieid, setMovieid ] = useState();
    // const location = useLocation();
    // const history = useHistory();
    //nominees is an array with a max length of 5
    // useEffect (()=>{
    //         console.log(movieid)
    //         console.log(props)
    // }, [movieid])


    return(
        <>
         <div className="result-column">
            <img src={props.poster}alt="movie poster" className="poster"/>
            <h2>{props.title}</h2>
            <h2 className="year">{props.year}</h2>
            <button value={props.id} onClick={e=>props.onClick(e.target.value)}>
                NOMINATE
            </button>
        </div> 
        </>
        
    )
}  

export default Result;