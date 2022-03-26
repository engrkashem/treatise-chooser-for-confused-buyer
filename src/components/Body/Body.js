import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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

    const addToCart = (book) => {
        if (cart.length < 4) {
            const newCart = [...cart, book];
            setCart(newCart)
        }
        else {
            alert('Oppps!!! You Have added maximum')
        }
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
                    <h5>Item {cart.length} Added</h5>
                    {
                        cart.map(book => <Cart
                            key={book.id}
                            book={book}
                        ></Cart>)
                    }
                    <button className='btn-choose btn-for-me'>
                        <strong>CHOOSE 1 FOR ME</strong>
                    </button>
                    <button className='btn-choose btn-again'>
                        <strong>CHOOSE AGAIN</strong>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Body;