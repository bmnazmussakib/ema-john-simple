import React from 'react';

const Reviewitem = (props) => {

    const {name, quantity, key, price} = props.product;
    const itemStyle = {borderBottom: "1px solid lightgrey", paddingBottom:"20px", width: "60%"};
    

    return (
        <div style={itemStyle} className='product-name'>
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <h3>Order quantity: {quantity.length}</h3>
            <button onClick={() => props.removeProducts(key)} className="order-button">Remove Item</button>

        </div>
    );
};

export default Reviewitem;