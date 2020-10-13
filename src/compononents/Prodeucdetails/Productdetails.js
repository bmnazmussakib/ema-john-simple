import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const Productdetails = () => {

    const {productKey} = useParams();
    const product = fakeData.find(prod => prod.key === productKey);

    return (
        <div>
            <h1>{productKey} details coming soon...</h1>
            <Product showAddCart={false} product={product}></Product>
        </div>
    );
};

export default Productdetails;