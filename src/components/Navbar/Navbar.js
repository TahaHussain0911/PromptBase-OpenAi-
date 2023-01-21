import React from "react";
import logo from "../../../src/assets/logo.png";
import "./Navbar.css";
const handleClick=()=>{
    const list=document.querySelector('ul');
    if (list.classList.length===2) {
        list.classList.remove('openMenu')        
    }
    else{
        list.classList.add('openMenu')
    }
    // console.log(list.classList)
}
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src={logo} alt=""/>
            <span>PromptBase</span>
        </div>
        <div className="navbar-search_bar">
            <input type="text" name="search" placeholder='Search Prompts' />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="navbar-list_items">
            <ul className="hamburger">
                <li>Marketplace</li>
                <li className='special-list'>Generate</li>
                <li>Hire</li>
                <li>Account</li>
                <li>Chat</li>
                <li>Sell<i class="fa-solid fa-arrow-right"></i></li>
            </ul>
        <i class="fa-solid fa-bars" onClick={handleClick}></i>
        </div>
    </div>
  );
};

export default Navbar;
