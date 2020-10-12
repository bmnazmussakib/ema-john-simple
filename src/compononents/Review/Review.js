import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Reviewitem from '../Rivewitem/Reviewitem';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProducts = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
    })
    
   

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <Reviewitem removeProducts={removeProducts} product = {pd}></Reviewitem>)
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;