import BestSellerSection from "../components/BestSellerSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BestSellerSection />
      <ProductCard
        img={"/gamingChair.jpg"}
        productName={"Gaming Chair"}
        productPrice={400}
      />
    </>
  );
};

export default HomePage;
