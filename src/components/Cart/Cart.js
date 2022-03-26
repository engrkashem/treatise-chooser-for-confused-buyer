import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ book: { id, name, img, author, price } }) => {

    return (
        <div>
            <div className='cart-item'>
                <img src={img} alt="" />
                <h6 className='cart-item-name'>{name.slice(0, 15)}...</h6>
                <div className='trash'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );
};

export default Cart;