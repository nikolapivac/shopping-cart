import React from "react";
import Header from "../Header"
import Footer from "../Footer"
import Product from "../Product/Product";
import "../styles/Products.css"

const Products = ({wines}) => {
    const cards = wines.map((wine) => (
        <Product key={wine.id} wine={wine} />
    ))

    return (
        <>
            <Header />
            <div className="products_container">
                {cards}
            </div>
            <Footer />
        </>
    )
}

export default Products;