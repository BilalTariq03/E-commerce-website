import React from "react";
import bannerImg from "../assets/images/banner/banner4.jpg";
import "../assets/styles/Banner.css"

function Banner(){
  return(
    <div className="banner">
      <img src={bannerImg} alt="banner-image" className="banner-image" />
      <div className="banner-text">
        <h1>Summer Collection</h1>
        <p>Fresh styles just dropped</p>
        <button> shop now</button>
      </div>
    </div>
  )
}

export default Banner;
