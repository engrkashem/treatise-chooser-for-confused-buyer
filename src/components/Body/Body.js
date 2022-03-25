import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Body.css'


const Body = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (id) => {
        console.log(id)
    }

    return (
        <div className='product-cart-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart-info'>

                    <h3>Favourite Book Cart</h3>
                </div>
            </div>
        </div>
    );
};

export default Body;