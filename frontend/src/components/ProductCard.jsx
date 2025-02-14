import "../css/productCard.css";
import Button from "./Button";

const ProductCard = ({ productImg, productName, productPrice }) => {
  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img src={productImg} alt={productName} height={300} width={300} />
        </div>
        <p className="product-name">{productName}</p>
        <span className="product-price">${productPrice}</span>
        <div className="add-to-cart-button">
          <Button
            text={"Add to Cart"}
            bgColor={"#8355e5"}
            color={"white"}
            height={"40px"}
            width={"193px"}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
