import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import DealBlock from "../components/DealSection"
import ReviewSection from "../components/Feedback";
import Footer from "../components/Footer";

import deal1 from "../assets/images/deals/deal1.jpg";
import deal2 from "../assets/images/deals/deal2.jpg";
import deal3 from "../assets/images/deals/deal3.jpg";
import deal4 from "../assets/images/deals/deal4.jpg";
import deal5 from "../assets/images/deals/deal5.jpg";


const WomensDeals = [
  {title: "Everyday Go", image: deal1, gridClass:""},
  {title: "Essentials", image: deal3, gridClass:""},
  {title: "Signature", image: deal2, gridClass:"tall"},
  {title: "Monday to Friday", image: deal4, gridClass:""},
  {title: "Anmol Pret", image: deal5, gridClass:""}
]

const MenDeals =[
  {title: "Western", image: "https://picsum.photos/450/350", gridClass:"tall" },
  {title: "Eastern", image: "https://picsum.photos/450/350", gridClass:"" },
  {title: "Unstiched", image: "https://picsum.photos/450/350",gridClass:"" },
  {title: "Shoes", image: "https://picsum.photos/450/350",gridClass:"" },
  {title: "Fragrances", image: "https://picsum.photos/450/350",gridClass:"" },
]

const kidsDeal =[
  {title: "Teen Boys", image: "https://picsum.photos/450/350",gridClass:"" },
  {title: "Teen Girls", image: "https://picsum.photos/450/350",gridClass:"" },
  {title: "Kid Boys", image: "https://picsum.photos/450/350",gridClass:"tall" },
  {title: "Kid Girls", image: "https://picsum.photos/450/350",gridClass:"wide" },
]

const Accessories =[
  {title: "Bags", image: "https://picsum.photos/250/200",gridClass:"" },
  {title: "Shoes", image: "https://picsum.photos/250/200",gridClass:"" },
  {title: "Jewlery", image: "https://picsum.photos/250/200",gridClass:"" },
  {title: "Frarences", image: "https://picsum.photos/250/200",gridClass:"" },
  {title: "Makeup", image: "https://picsum.photos/250/200",gridClass:"" },
]

function Home(){
  return(
    <div>
      <Navbar />
      <main>
        <Banner />
        <DealBlock deals={WomensDeals} sectionPath="Women"/>
        <DealBlock deals={MenDeals} sectionPath="Men"/>
        <DealBlock deals={kidsDeal} sectionPath="Boys & Girls"/>
        <DealBlock deals={Accessories} sectionPath="Accessories" className="deal-grid-small"/>
        <ReviewSection/>
        <Footer/>
      </main>
    </div>
  );
}

export default Home;