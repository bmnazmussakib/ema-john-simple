import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData'
import cameras from '../../fakeData/camera';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
import { Link } from 'react-router-dom';


function Shop() {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            return product;
        });
        setCart(cartProducts);
    }, []);

    const handleProductAdd = (product) => {
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded.key);

        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = sameProduct.quantity + 1;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, product];
        }

        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }


        newCart = [...cart, product];
        setCart(newCart);

        addToDatabaseCart(product.key, count);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">

                {products.map(prod => <Product product={prod} key={prod.key} showAddCart={true} handleProductAdd={handleProductAdd}></Product>)}

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="order-button">Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
}

export default Shop;