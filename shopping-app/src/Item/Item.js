import React from "react";
import "../styles/Item.css";

const Item = ({item, handleAddToCart }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddToCart(item.id, 1);
    }

    return (
        <div className="item_container">
            <img className="item_image" alt={item.name} src={item.image} />
            <div className="item_right">
                <div className="item_info">
                    <h1 className="item_name">{item.name}</h1>
                    <h3 className="item_price">{item.price} €</h3>
                </div>
                <button onClick={handleSubmit} className="add_to_cart_btn">Add to cart</button>
            </div>
        </div>
    )
}

export default Item;