import "../css/bestSellerSection.css";
import ProductCard from "../components/ProductCard.jsx";

const BestSellerSection = () => {
  return (
    <>
      <div className="best-seller-container">
        <div className="best-seller-heading">
          <h2>BEST SELLERS</h2>
          <div className="view-all">
            <span>View All</span>
          </div>
        </div>
        <div className="product-slider-container">
          <ProductCard
            img={"/gamingChair.jpg"}
            productName={"Gaming Chair"}
            productPrice={400}
          />
          <ProductCard
            img={"/headset.jpg"}
            productName={"Headset"}
            productPrice={270}
          />
          <ProductCard
            img={"/wave.jpg"}
            productName={"Wave"}
            productPrice={650}
          />
          <ProductCard
            img={"/wirelessMouse.jpg"}
            productName={"Wireless Mouse"}
            productPrice={150}
          />
        </div>
      </div>
    </>
  );
};

export default BestSellerSection;
