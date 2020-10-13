import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Reviewitem from '../Rivewitem/Reviewitem';
import './Review.css';
import happyFace from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    const placeOrder = () => {
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    function removeProducts(productKey) {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        });
        setCart(cartProduct);
    }, []);


    let thankYou;
    if (orderPlace) {
        thankYou = <img src={happyFace} alt="" />
    }



    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <Reviewitem removeProducts={removeProducts} product={pd}></Reviewitem>)
                }
                {
                    thankYou
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrder} className="order-button">Place Order</button>
                </Cart>
            </div>


        </div>
    );
};

export default Review;