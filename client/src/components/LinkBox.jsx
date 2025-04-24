import React from "react";
import { Link } from "react-router-dom"
import "../assets/styles/LinkBox.css";

const categories =[
  {name: "Eastern", image: "https://picsum.photos/140/140?1"},
  {name: "Western", image: "https://picsum.photos/140/140?2"},
  {name: "Unstiched", image: "https://picsum.photos/140/140?3"},
  {name: "Shoes", image: "https://picsum.photos/140/140?4"}
];

function LinkBox({section}){
  return(
    <div className="Link-grid">
      {categories.map((category, index) => (
        <div key={index} className={`category-card ${index%2===1? "even-card": "odd-card"}`}>
          <Link to={`/${section}/${category.name}`}>
            <img src ={`${category.image}`} />
            <p className="category-name">{`${category.name.toUpperCase()}`}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default LinkBox