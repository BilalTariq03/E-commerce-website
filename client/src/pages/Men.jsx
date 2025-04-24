import Navbar from "../components/Navbar";
import LinkBox from "../components/LinkBox";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import axios from "axios";
import { useEffect, useState } from "react";


function Men(){
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const fetchMenProducts = async () => {
      try{
        const res = await axios.get("http://localhost:5000/products/Men");
        const MenProducts = res.data.filter(product => product.category === "Men");
        console.log("Fetched from backend:", res.data);
        setProducts(MenProducts);
      }catch(err){
        console.error("Error fetching products", err);
      }
    };

    fetchMenProducts();
  }, []);

  return (
    <div>
      <Navbar/>
      <LinkBox section="Men"/>

      <ProductBlock Products={products}/>

      <Footer/>
    </div>
  )
}

export default Men;