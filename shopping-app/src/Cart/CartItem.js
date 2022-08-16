import React from "react";
import "../styles/CartItem.css"

const CartItem = ({product, handleCartDelete }) => {
    const id = product.id;

    return(
        <div className="cart_item_container">
            <img className="cart_item_image" src={product.image} alt={product.name}/>
            <p className="cart_item_name">{product.name}</p>
            <p className="cart_item_price">{product.price} €</p>
            <p className="cart_item_amount">Amount: {product.amount}</p>
            <i onClick={(e) => handleCartDelete(id)} className="gg-trash"></i>
        </div>
    )
}

export default CartItem;