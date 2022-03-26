import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="header">

                <img src={logo} alt="" />

                <div className="header-text">
                    <h1>TREATISE CHOOSER</h1>
                </div>

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
            <h2 className='header-instruction'>Choose Maximum 4 Items</h2>
        </nav>
    );
};

export default Header;