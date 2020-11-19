import React from 'react'
import "./style.css"

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/home">Home</a>
            <a href="/aboutus">About Us</a>
            <a href="/contactus">Contact Us</a>
        </nav>
        <div>
            Social Media links
        </div>
    </header>
   )

 }

export default Header