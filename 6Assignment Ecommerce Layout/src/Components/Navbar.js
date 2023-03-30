import React from 'react';
import "./Navbar.css";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/avatar.png";



function Navbar(props) {
    return (
        <div id='first_nav_div'>
            <div id='navbar'>
                <img id='logo' src={logo} alt="" />

                <ul className='menu_items'>
                    <li>Collection</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div id='right_part'>
                    {/* <div> */}
                        <img src={cart} alt="" />
                        <img id='avatar' src={avatar} alt="" />
                    {/* </div> */}
                    
                </div>
            </div>
            <div>
            <ul className='menu_items' id='menu_items_media'>
                    <li>Collection</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;