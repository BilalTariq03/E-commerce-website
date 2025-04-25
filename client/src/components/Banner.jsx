import React from "react";
import bannerImg from "../assets/images/banner/banner4.jpg";
import { Link } from "react-router-dom";
import "../assets/styles/Banner.css"

function Banner(){
  return(
    <div className="banner">
      <img src={bannerImg} alt="banner-image" className="banner-image" />
      <div className="banner-text">
        <h1>Summer Collection</h1>
        <p>Fresh styles just dropped</p>
        <Link to= "/Men">
          <button> shop now</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner;
