import BestSellerSection from "../components/BestSellerSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import CategorySection from "../components/CategorySection";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BestSellerSection />
      <CategorySection />
    </>
  );
};

export default HomePage;
