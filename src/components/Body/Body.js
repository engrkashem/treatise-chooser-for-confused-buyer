import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css'


const Body = () => {

    const [products, setProducts] = useState([]);

    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (book) => {
        if (carts.length < 4) {
            const newCart = [...carts, book];
            setCarts(newCart)

        }
        else {
            alert('Oppps!!! You Have added maximum')
        }
    }

    const generateRandomId = () => {
        const randomID = Math.floor(Math.random() * 100)
        if (randomID < 13) {
            return randomID
        }
        else {
            generateRandomId()
        }
    }

    const matchRandomIdWithCartId = () => {

        const randomID = generateRandomId()
        let matchedCart = [];
        for (const cart of carts) {
            if (cart.id === randomID) {
                matchedCart.push(cart)
                return matchedCart
            }
        }
        if (matchedCart === []) {
            matchRandomIdWithCartId()
        }
        // return matchedCart;
    }

    const chooseFromCart = () => {
        const matchedCart = matchRandomIdWithCartId()
        console.log(matchedCart)
        setCarts(matchedCart)

    }

    const removeCart = () => {
        setCarts([])
    }

    /*  const chooseOneRandomly = (cart) => {
         const randomID = Math.floor(Math.random() * 10)
         // console.log(cart.id, randomID)
         if (cart.id === randomID) {
             const newCart = [cart]
             setCarts(newCart)
         }
         else {
             chooseOneRandomly(cart)
         }
     } */

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