import React from "react";
import "../styles/Info.css";
import CardPhoto1 from "../images/card1.jpg";
import CardPhoto2 from "../images/card2.jpg"; 
import CardPhoto3 from "../images/card3.jpg"; 

const Info = () => {
    return (
        <div className="info_container">
            <div className="info_card">
                <img src={CardPhoto1} className="info_image"></img>
                <p className="info_desc">Homegrown grapes</p>
            </div>
            <div className="info_card">
                <img src={CardPhoto2} className="info_image"></img>
                <p className="info_desc">Professional wineries</p>
            </div>
            <div className="info_card">
                <img src={CardPhoto3} className="info_image"></img>
                <p className="info_desc">Elegant bottles</p>
            </div>
        </div>
    )
}

export default Info;