import React, { Component } from "react";
import '../../styles/component-styles/NominationList.scss';


class NominationList extends Component{

    state={
        nomination: [],
    }

    render(){
        return(
            <>
                <h2 className="nomination-header">Your Nominations
                </h2>
            <div className="nomination">
                <div className="nomination-card">
                    <img src="poster" alt="movie poster"/>
                    <h3 className="nomination-title">title</h3>
                    <span className="nomination-date">year</span>
                </div>
                {/* <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div>
                <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div>
                <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div>
                <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div> */}
            </div>
            </>
        )
    }
}

export default NominationList;