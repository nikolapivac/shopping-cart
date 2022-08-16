import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">Wine Shop</div>
            <div className="contact_section">
                <Link to="https://www.facebook.com"><i className="gg-facebook"></i></Link>
                <Link to="https://www.instagram.com"><i className="gg-instagram"></i></Link>
                <Link to="https://www.twitter.com"><i className="gg-twitter"></i></Link>
            </div>
        </div>
        
    )
}

export default Footer;
