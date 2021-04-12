import React from 'react';
import './header.css';

const Header = ({black}) => {
    return(<header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logo-600x338.png"/>
            </a>
        </div>
        <div className="header--logo">
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
        </div>
    </header>)
}

export default Header;