import React from "react";
import "../styles/CallToAction.css"

const CallToAction = () => {
    return(
        <div className="cta_container">
            <div className="cta_items">
                <h1 className="cta_title">Winery</h1>
                <a href="/products"><button className="cta_btn">Shop</button></a>
            </div>
        </div>
    )
}

export default CallToAction;