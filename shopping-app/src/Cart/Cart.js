import React from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css"

const Cart = ({cart, getCartTotal, getCartSize, handleCartDelete }) => {
    return (
        <div className="cart_container">
            <h1 className="cart_title">Your Cart ({getCartSize()})</h1>
            <div className="cart_items">
                {cart.map(cartItem => (
                    <CartItem key={cartItem.id} handleCartDelete={handleCartDelete} product={cartItem} />
                ))}
            </div>
            <div className="cart_info">
                <h3>Total: {getCartTotal()} €</h3>
            </div>
            <button className="checkout">Checkout</button>
        </div>
    )
}

export default Cart;