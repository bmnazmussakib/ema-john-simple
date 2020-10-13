import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {

    // console.log(props.product);
    const { img, name, price, seller, stock, key } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h2 > <Link to={"/product/" + key}>{name}</Link> </h2>
                <br />
                <p><small>Seller : {seller}</small></p>
                <h4>Price : ${price}</h4>
                <p><small>Only {stock} item left in stock. Order Now.</small></p>
                {props.showAddCart && <button onClick={() => props.handleProductAdd(props.product)} className='order-button'><FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>}
            </div>
        </div>
    );
};

export default Product;