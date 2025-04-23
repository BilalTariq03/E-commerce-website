import React from "react";
import { Link } from "react-router-dom"
import '../assets/styles/Navbar.css'
import {FiShoppingCart, FiUser, FiHeart} from 'react-icons/fi'

function Navbar(){
  return(
    <header className="header">
      <h1 className="shop-name">ANMOL</h1>
      <div className="header-content">
        <nav className="navbar">
          <ul>
            <li> <Link to="/" className="Home-link">Home</Link> </li>
            <li> <Link to="/Men" className="men-clothing-link">Men</Link> </li>
            <li> <Link to="/Women" className="women-clothing-link">Women</Link> </li>
            <li> <Link to="/Kids" className="kids-clothing-link">Kids</Link> </li>
            <li> <Link to="/Shoes" className="shoes-link">Shoes</Link> </li>
            <li><Link to="/Bags" className="bags-link">Bags</Link> </li>
          </ul>
          
        </nav>

        <input type="text" className="search-box" placeholder="Search"/>
        
        <div className="links">
          <ul>
            <li> <Link to="/Profile" className="Profile"><FiUser className="icon"/></Link>
            </li>
            <li>
             <Link to="/Cart" className="Cart"><FiShoppingCart className="icon"/></Link>
            </li>
            <li> <Link to="/Favourites" className="favourites"><FiHeart className="icon"/></Link> </li>
          </ul>
          
        </div>
        
      </div>
      
    </header>
  )
}

export default Navbar