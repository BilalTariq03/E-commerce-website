import React from "react";
import "../assets/styles/DealSection.css";
import { Link } from "react-router-dom";

function DealSection({ deals,sectionPath, className="" }) {
  return (
    <>
    <h2 className="title"> Deals for {sectionPath} </h2>
    <div className={`deal-grid ${className}`}>
      {deals.map((deal,index) => (
        <div key={index} 
        className={`deal-card ${deal.gridClass}`}>
          <Link to={`/${sectionPath}/${deal.title}`}>
          <img src ={deal.image} alt={deal.title} />
          <div className="deal-title">{deal.title}</div>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}

export default DealSection;
