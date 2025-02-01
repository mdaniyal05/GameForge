import "../css/productCard.css";
import { bestSellerData } from "../JS/sliderData";

const ProductCard = () => {
  return (
    <>
      {bestSellerData.map((data) => (
        <div className="product-container" key={data.name}>
          <div className="product-image">
            <img src={data.img} alt={data.name} height={300} width={300} />
          </div>
          <p className="product-name">{data.name}</p>
          <span className="product-price">${data.price}</span>
          <div className="add-to-cart-button">
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
