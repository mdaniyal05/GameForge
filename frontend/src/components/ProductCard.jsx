import "../css/productCard.css";

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
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
