import BestSellerSection from "../components/BestSellerSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BestSellerSection />
      <CategorySection />
      <DealsSection />
    </>
  );
};

export default HomePage;
