import React from "react";
import "../styles/Product.css"

const Product = ({wine}) => {
    const path = `/shop/${wine.id}`;
    return (
        <div className="product_card">
            <a href={path}><img className="product_image" src={wine.image} /></a>
            <a href={path}><h1 className="product_name">{wine.name}</h1></a>
            <h3 className="product_price">{wine.price}</h3>
        </div>
    )
}

export default Product;