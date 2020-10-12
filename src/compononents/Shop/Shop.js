import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);


    const handleProductAdd = (product) => {
        //console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
        const count = newCart.filter(pd => pd.key === product.key);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(prod => <Product key={prod.key} showAddCart={true} addProductToCart = {handleProductAdd} product={prod}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;