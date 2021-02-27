import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.product);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="imgDiv">
                <img src={img} alt=""/>
            </div>
            <div>
                <p className="name">{name}</p>
                <p className="seller">by: {seller}</p>
                <p className="price">${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="cartButton"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>

    );
};

export default Product;