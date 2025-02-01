import "../css/sellersSection.css";
import ProductCard from "./ProductCard.jsx";

const SellersSection = ({ mainHeading }) => {
  return (
    <>
      <div className="best-seller-container">
        <div className="best-seller-heading">
          <h2>{mainHeading}</h2>
          <div className="view-all">
            <span>View All</span>
          </div>
        </div>
        <div className="product-slider-container">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default SellersSection;
