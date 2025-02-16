import SellersSection from "../components/SellersSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import CategorySection from "../components/CategorySection";
import DealsSection from "../components/DealsSection.jsx";
import DiscountSection from "../components/DiscountSection.jsx";
import NewsLetterSection from "../components/NewsLetterSection.jsx";
import GamesStack from "../components/GamesStack.jsx";
import Footer from "../components/Footer.jsx";
import {
  bestSellerData,
  upgradeYourGearData,
  trendingGamesData,
} from "../JS/sliderData";

const HomePage = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <section>
          <HeroSection />
        </section>
        <section>
          <SellersSection
            mainHeading={"BEST SELLERS"}
            sellerData={bestSellerData}
          />
        </section>
        <section>
          <CategorySection />
        </section>
        <figure>
          <DealsSection />
        </figure>
        <section>
          <SellersSection
            mainHeading={"UPGRADE YOUR GEAR"}
            sellerData={upgradeYourGearData}
          />
        </section>
        <section>
          <DiscountSection />
        </section>
        <section>
          <SellersSection
            mainHeading={"TRENDING GAMES"}
            sellerData={trendingGamesData}
          />
        </section>
        <section>
          <NewsLetterSection />
        </section>
        <figure>
          <GamesStack />
        </figure>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
