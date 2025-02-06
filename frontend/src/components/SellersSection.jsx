import { useEffect, useRef, useState } from "react";
import "../css/sellersSection.css";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const SellersSection = ({ mainHeading, sellerData }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="seller-container">
        <div className="seller-heading">
          <h2>{mainHeading}</h2>
          <div className="view-all">
            <span>View All</span>
          </div>
        </div>
        <motion.div className="carousel" ref={carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {sellerData.map((data) => (
              <ProductCard
                productImg={data.img}
                productName={data.name}
                productPrice={data.price}
                key={data.name}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SellersSection;
