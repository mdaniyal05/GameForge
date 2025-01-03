import "../css/heroSection.css";
import HeroBuyCard from "../components/HeroBuyCard";
import HeroPosterCard from "../components/HeroPosterCard";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-card-box">
          <HeroBuyCard />
          <HeroPosterCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
