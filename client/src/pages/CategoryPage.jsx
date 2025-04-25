import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import LinkBox from "../components/LinkBox";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const encodedCategory = encodeURIComponent(category);
        const res = await axios.get(`http://localhost:5000/products/${encodedCategory}`);
        console.log("Fetched from backend:", res.data);
        setProducts(res.data); 
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div>
      <Navbar />
      <LinkBox section={category} />
      <ProductBlock Products={products} />
      <Footer />
    </div>
  );
}

export default CategoryPage;
