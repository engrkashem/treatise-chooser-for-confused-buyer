import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ book, removeItem }) => {

    const { id, name, img } = book

    return (
        <div>
            <div className='cart-item'>
                <img src={img} alt="" />
                <h6 className='cart-item-name'>{name.slice(0, 15)}...</h6>
                <div onClick={() => removeItem(id)} className='trash'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );
};

export default Cart;