import React, { useContext } from 'react'
import {LOGO_URL} from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
const[btnName,setBtnName] = useState("logout")
const onlineStatus = useOnlineStatus();
const {userName} = useContext(UserContext);

const item = useSelector((store) => store.cart.item)

//console.log(item);


    return (
      <div className="flex justify-between bg-orange-300">
        <div className="logo-container">
          <img className="w-32" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-5">
            <li className="px-3">
              online status : {onlineStatus ? "✅" : "🔻"}
            </li>
            <li className="px-3">
              <Link to="/Grocery">Grocery</Link>
            </li>
            <li className="px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-3">
              <Link to="/contact">Contact US</Link>
            </li>
            <li className="px-3 text-xl">
              <Link to="/cart">🥣- ({item.length} items)</Link>
            </li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "logout"
                  ? setBtnName("login")
                  : setBtnName("logout");
              }}>
              {btnName}
            </button>
            <li className="px-3">{userName}</li>
          </ul>
        </div>
      </div>
    );
};

export default Header