import React from "react";
import Product from "../Product/Product";
import "../styles/Products.css"

const Products = ({wines}) => {
    const cards = wines.map((wine) => (
        <Product key={wine.id} wine={wine} />
    ))

    return (
        <div className="products_container">
            {cards}
        </div>
    )
}

export default Products;