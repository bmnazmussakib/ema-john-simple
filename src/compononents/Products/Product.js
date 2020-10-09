import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    // console.log(props.product);
    const { img, name, price, seller, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h2 >{props.product.name}</h2>
                <br />
                <p><small>Seller : {seller}</small></p>
                <h4>Price : ${price}</h4>
                <p><small>Only {stock} item left in stock. Order Now.</small></p>
                <button onClick={()=>props.addProductToCart(props.product)} className='order-button'><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>
            </div>
        </div>
    );
};

export default Product;