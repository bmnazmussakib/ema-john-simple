import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    let totalItem = 0;
    for(let i = 0; i<cart.length; i++){
        const items = cart[i];
        totalItem = totalItem + items.price*items.quantity ; 
    }
    
    let shipping = 0;
    if(totalItem > 100){
        shipping = 0;
    }
    else if(totalItem > 50){
        shipping = 7.99;
    }
    else if(totalItem > 0){
        shipping = 4.99;
    }

    let total = totalItem + shipping;
    
   
    
    
    
    

    return (
        <div>
            <h1>This is the Cart</h1>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Total item price: $ {totalItem}</h5>
            <h5>Shipping Cost: $ {shipping}</h5>
            <h3>Total: $ {total}</h3>
            {
                props.children
            }

        </div>
    );
};

export default Cart;