import React from "react";
import "../assets/styles/Footer.css"
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-section Need-Help-Section">
        <h2> Need Help </h2>
        <ul>
          <li><Link to="/Contact-US"> Contact Us </Link></li>
          <li><Link to="/Track-Order"> Track Order </Link></li>
          <li><Link to="/return-&-refund"> Return & Refund </Link></li>
          <li><Link to="/FAQ's"> FAQ's </Link></li>
          <li><Link to="/Carrer"> Career </Link></li>
        </ul>
      </div>

      <div className="footer-section Company-Info-Section">
        <h2> Company </h2>
        <ul>
          <li><Link to="/About-us">About Us</Link> </li>
          <li> <Link to="/Anmol-Blog">Anmol Blog</Link></li>
          <li><Link to="/Collaboration"> Collaboration </Link></li>
          <li><Link to="/Media"> Media </Link></li>
        </ul>
        
      </div>

      <div className="footer-section More-Info-Section">
        <h2> More Info </h2>
        <ul>
          <li><Link to="/T&C">Terms and Conditions</Link> </li>
          <li> <Link to="/Privacy-Policy">Privacy Policy</Link></li>
          <li><Link to="/Shipping Policy"> Shipping Policy </Link></li>
          <li><Link to="/Sitemap"> Sitemap </Link></li>
        </ul>
      </div>

      <div className="footer-section Contact-Section">
        <h2> Contact </h2>
        <ul>
          <li><Link to="https://www.gmail.com" target="empty">support@anmol.com</Link> </li>
          <li> +92 300 1234567</li>
          <li>Islamabad, Pakistan</li>
        </ul>    
      </div>

      <div className="footer-section Social-Section">
        <h2> Follow Us </h2>
        <ul>
          <li><Link to="https://www.facebook.com" target="empty"><FaFacebook/></Link> </li>
          <li> <Link to="https://www.instagram.com" target="empty"><FaInstagram/></Link></li>
          <li><Link to="https://www.twitter.com" target="empty"><FaTwitter/> </Link></li>
          <li><Link to="https://www.youtube.com" target="empty"> <FaYoutube/> </Link></li>
          <li><Link to="https://www.linkedin.com" target="empty"> <FaLinkedin/> </Link></li>
        </ul>  
      </div>
    </footer>
  )
}

export default Footer
