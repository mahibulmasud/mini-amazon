import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product.key);
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div className="imgDiv">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p className="name">{name}</p>
                <p className="seller">by: {seller}</p>
                <p className="price">${price}</p>
                <p>only {stock} left in stock - order soon</p>
                { props.showAddCart && <button className="cartButton" onClick={()=> props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    </button>}
            </div>
        </div>

    );
};

export default Product;