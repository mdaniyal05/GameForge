import { useEffect, useRef, useState } from "react";
import "../css/sellersSection.css";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Button from "./Button";

const SellersSection = ({ mainHeading, sellerData }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="seller-container">
        <div className="seller-heading" ref={ref}>
          {isInView ? (
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {mainHeading}
            </motion.h2>
          ) : (
            <></>
          )}
          <div className="view-all">
            <Button
              text={"View All"}
              bgColor={"#8355e5"}
              color={"white"}
              height={"38px"}
              width={"193px"}
            />
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
