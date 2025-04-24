import Navbar from "../components/Navbar";
import LinkBox from "../components/LinkBox";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import axios from "axios";
import { useEffect, useState } from "react";


function Men(){
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try{
        const res = await axios.get("http://localhost:5000/products/Women");
        const MenProducts = res.data.filter(product => product.category === "Women");
        console.log("Fetched from backend:", res.data);
        setProducts(MenProducts);
      }catch(err){
        console.error("Error fetching products", err);
      }
    };

    fetchWomenProducts();
  }, []);

  return (
    <div>
      <Navbar/>
      <LinkBox section="Women"/>

      <ProductBlock Products={products}/>

      <Footer/>
    </div>
  )
}

export default Men;