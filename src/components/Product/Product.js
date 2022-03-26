import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { name, price, img, author } = product;
    return (
        <div className='Product-card-container'>
            <div className='Product-card'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Author: <strong>{author}</strong></p>
                <p>Price: <strong>${price}</strong></p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-add-cart'>
                <p className='btn-text'> <strong>ADD TO CART</strong></p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;