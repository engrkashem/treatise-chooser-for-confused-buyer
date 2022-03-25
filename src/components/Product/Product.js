import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, name, price, img, author } = props.product
    console.log(img)
    return (
        <div className='Product-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;