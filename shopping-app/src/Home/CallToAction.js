import React from "react";
import { Link } from "react-router-dom";
import "../styles/CallToAction.css"

const CallToAction = () => {
    return(
        <div className="cta_container">
            <div className="cta_items">
                <h1 className="cta_title">Wine Shop</h1>
                <Link to="/products"><button className="cta_btn">Shop</button></Link>
            </div>
        </div>
    )
}

export default CallToAction;