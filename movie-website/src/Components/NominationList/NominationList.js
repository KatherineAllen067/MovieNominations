import React, { Component } from "react";
import '../../styles/component-styles/NominationList.scss';


class NominationList extends Component{
    render(){
        return(
            <>
                <h2 className="nominations-title">Your Nominations
                </h2>
            <div className="nominations">
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
                </div>
                <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div>
                <div className="nominations-card">
                    <h3>title</h3>
                    <span>year</span>
                </div>
            </div>
            </>
        )
    }
}

export default NominationList;