import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Body.css'


const Body = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='product-cart-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>CArt</h1>
            </div>
        </div>
    );
};

export default Body;