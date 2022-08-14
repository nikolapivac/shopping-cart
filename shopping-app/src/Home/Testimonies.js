import React from "react";
import "../styles/Testimonies.css"

const Testimonies = () => {
    return (
        <div className="testimony_container">
            <h1>What our customers said</h1>
            <div className="testimony_card">
                <p>"My wife and I stumbled upon this exquisite wine while we were on
                    vacation in Tuscany. We travel frequently and we tried all different
                    sorts of wines. This one is definitely on top of my list."
                </p>
                <p className="testimony_name">Charles</p>
            </div>
            <div className="testimony_card">
                <p>"The amount of sorts this winery has is extraordinary. My son bought 
                    me a bottle of Merlot for my 64th birthday and I don't remember drinking
                    better wine. My friends' wedding anniversary is coming up and I'm definitely
                    getting them a bottle."
                </p>
                <p className="testimony_name">Linda</p>
            </div>
            <a href="/contact"><button className="testimony_contact">Contact Us</button></a>
        </div>
    )
}

export default Testimonies;