import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css"

const Product = ({wine}) => {
    const path = `/products/${wine.url}`;
    return (
        <div className="product_card">
            <Link to={path}><img className="product_image" src={wine.image} /></Link>
            <Link to={path}><h1 className="product_name">{wine.name}</h1></Link>
            <h3 className="product_price">{wine.price} €</h3>
        </div>
    )
}

export default Product;