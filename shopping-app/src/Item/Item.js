import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "../styles/Item.css";

const Item = ({item}) => {
    return (
        <>
        <Header />
        <div className="item_container">
            <img className="item_image" alt={item.name} src={item.image} />
            <div className="item_right">
                <div className="item_info">
                    <h1 className="item_name">{item.name}</h1>
                    <h3 className="item_price">{item.price}</h3>
                </div>
                <button className="add_to_cart_btn">Add to cart</button>
            </div>
        </div>
        <Footer />
        </> 
    )
}

export default Item;