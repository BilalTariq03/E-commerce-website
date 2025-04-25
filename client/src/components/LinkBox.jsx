import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "../assets/styles/LinkBox.css";
import axios from "axios";


function LinkBox({section}){
  const [categories,setCategories] = useState([])

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/subcategories/${section}`);
        setCategories(res.data); 
      } catch (err) {
        console.error("Error fetching subcategories:", err);
      }
    };
  
    fetchSubCategories();
  }, [section]);
  

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