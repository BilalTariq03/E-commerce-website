import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import DealBlock from "../components/DealSection"
import ReviewSection from "../components/Feedback";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";


function Home(){
  const [menDeals,setMenDeals] =useState([]);
  const [womenDeals,setWomenDeals] =useState([]);
  const [kidsDeals,setKidsDeals] =useState([]);
  const [accessories,setAccessories] =useState([]);
  const [cartItoms,setCart] =useState([]);

  useEffect(()  =>{
    const fetchDeals = async (section, setter) => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_BASE}/deals?section=${section}`);
        setter(res.data);
      }catch(err){
        console.error(`Error fetching ${section} deals`, err);
      }
    };
    fetchDeals("Men",setMenDeals);
    fetchDeals("Women", setWomenDeals);
    fetchDeals(encodeURIComponent("Boys & Girls"), setKidsDeals);
    fetchDeals("Accessories",setAccessories);
  }, []);

  return(
    <div>
      <Navbar />
      <main>
        <Banner />
        <DealBlock deals={womenDeals} sectionPath="Women"/>
        <DealBlock deals={menDeals} sectionPath="Men"/>
        <DealBlock deals={kidsDeals} sectionPath="Boys & Girls"/>
        <DealBlock deals={accessories} sectionPath="Accessories" className="deal-grid-small"/>
        <ReviewSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default Home;