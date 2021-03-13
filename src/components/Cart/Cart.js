import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
     const cart = props.cart;
     console.log(cart);
    //  const totalPrice = cart.reduce((total,prd)=> total + prd.price, 0);
    let total = 0;
     for (let i = 0; i < cart.length; i++) {
         const product = cart[i];
         total = total + product.price;
         
     }
     let shipping = 0;
     if(total > 35){
        shipping = 0;
     }
     if(total > 15){
         shipping = 4.99;
     }
     else if( total > 0){
         shipping = 12.99;
     }

     const tax = (total / 10).toFixed(2);
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items Ordered: {cart.length}</h3>
            <p>Product Price:{total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price: {total+shipping+Number(tax)}</p>
            <br/>
            <Link to ="/review">
            <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;