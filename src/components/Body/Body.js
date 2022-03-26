import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css'


const Body = () => {

    //state for displaying products
    const [products, setProducts] = useState([]);

    // state for adding items to cart
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //add to cart event handler
    const addToCart = (book) => {
        if (carts.length < 4) {
            const newCarts = carts.filter(cart => cart.id !== book.id)
            newCarts.push(book)
            setCarts(newCarts)
        }
        else {
            alert('Oppps!!! You Have added maximum')
        }
    }

    //function to generate  random number
    const generateRandomIndex = () => {
        const randomNum = Math.floor(Math.random() * 10)
        return randomNum;
    }

    // Choose One from Cart Event Handler
    const chooseFromCart = () => {
        if (carts.length !== 0) {
            let randomIndex = generateRandomIndex();
            if (randomIndex >= carts.length) {
                return chooseFromCart()
            }
            else {
                const newItem = [];
                newItem.push(carts[randomIndex]);
                setCarts(newItem)
            }
        }
    }

    //remove item from Event Handler
    const removeCart = () => {
        setCarts([])
    }

    const removeItem = (item) => {
        console.log('clicked')
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
                    <h5>Item {carts.length} Added</h5>
                    {
                        carts.map(book => <Cart
                            key={book.id}
                            book={book}
                            removeItem={removeItem}
                        ></Cart>)
                    }
                    <button onClick={chooseFromCart} className='btn-choose btn-for-me'>
                        <strong>CHOOSE 1 FOR ME</strong>
                    </button>
                    <button onClick={removeCart} className='btn-choose btn-again'>
                        <strong>CHOOSE AGAIN</strong>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Body;