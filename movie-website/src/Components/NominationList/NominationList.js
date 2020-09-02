import React, { Component } from "react";
// import axios from "axios";
import '../../styles/component-styles/NominationList.scss';


class NominationList extends Component{

    render(){

        return(
            <>
                <h2 className="nomination-header">
                    Your Nominations
                </h2>
                <div className="nomination">
                    <div className="nomination-card">
                        <h3 className="nomination-title">title</h3>
                        <span className="nomination-date">year</span>
                    <button type="submit">DELETE</button>
                    </div>
                </div>
            </>
        )
    }
}

export default NominationList;