import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css"

const Header = ({getCartSize}) => {
    return(
        <div className="header">
            <div className="logo">Wine Shop</div>
            <div className="navbar">
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/products" className="nav_item">Products</Link>
                <Link to="/contact" className="nav_item">Contact</Link>
                <Link to="/cart" className="cart_area">
                    <i className="gg-shopping-cart"></i>
                    <p className="cart_num">{getCartSize()}</p>
                </Link>
            </div>
        </div>
    )
}

export default Header;