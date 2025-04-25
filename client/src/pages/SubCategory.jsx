import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import LinkBox from "../components/LinkBox";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import axios from "axios";

function SubcategoryPage() {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategoryProducts = async () => {
      try {
        setLoading(true);
        setError(null);  // Reset error state on new request
        const encodedCategory = encodeURIComponent(category);
        const encodedSubcategory = encodeURIComponent(subcategory);
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE}/products/${encodedCategory}/${encodedSubcategory}`
        );
        setProducts(res.data);
      } catch (err) {
        setError("Error fetching subcategory products");
        console.error("Error fetching subcategory products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategoryProducts();
  }, [category, subcategory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <LinkBox section={category} />
      {products.length === 0 ? (
        <p>No products found in this subcategory.</p>
      ) : (
        <ProductBlock Products={products} />
      )}
      <Footer />
    </div>
  );
}

export default SubcategoryPage;
