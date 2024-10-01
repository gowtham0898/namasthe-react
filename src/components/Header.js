import React from 'react'
import {LOGO_URL} from '../utils/constants'
const Header = () => {

    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" style={{width:"150px"}} src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>         
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header