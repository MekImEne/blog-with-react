import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"
import searchImg from "../../assets/icons/search.png"
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const[search, setSearch] = useState(false);

  const submitSearch = (e) => {
     e.preventDefault();
     alert("Searched");
  };

  const openSearch = () => {
    setSearch(true);
    console.log('search something, ', search);
  }

  const searchClass = search ? 'searchInput:active' : 'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className="search">
        <form onSubmit={submitSearch}>
          <input className={searchClass} type="text" placeholder="Search" />
          <img onClick={openSearch} className="searchIcon" alt="search" src={searchImg} />
        </form>
        </div>
    </div>
   )

 }

export default Navbar