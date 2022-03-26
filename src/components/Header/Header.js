import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="header">

                <img src={logo} alt="" />

                <div>
                    <a href="/home">Home</a>
                    <a href="/products">Products</a>
                    <a href="/favourites">Favourites</a>
                    <a href="/about">About</a>
                </div>
            </div>
            <div className='sliding-text'>
                <marquee behavior="alternate" direction="">Synergizes Boosting Knowledge</marquee>
            </div>
        </nav>
    );
};

export default Header;