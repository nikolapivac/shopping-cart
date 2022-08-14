import React from "react";
import "./styles/Header.css"

const Header = () => {
    return(
        <div className="header">
            <div className="logo">Winery</div>
            <div className="navbar">
                <a href="/" className="nav_item">Home</a>
                <a href="/products" className="nav_item">Products</a>
                <a href="/contact" className="nav_item">Contact</a>
                <a href="/cart" className="cart_area">
                    <i className="gg-shopping-cart"></i>
                    <p className="cart_num">0</p>
                </a>
            </div>
        </div>
    )
}

export default Header;