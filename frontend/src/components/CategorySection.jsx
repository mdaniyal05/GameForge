import "../css/categorySection.css";
import CategorySectionCard from "./CategorySectionCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="category-section-cont">
        <div className="category-section-cont2">
          <h2 className="category-heading" ref={ref}>
            {isInView ? (
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                SHOP BY CATEGORY
              </motion.h2>
            ) : (
              <></>
            )}
          </h2>
          <div className="categories-cont">
            <Link to={"/consoles"}>
              <CategorySectionCard
                cardName={"Consoles"}
                imgSrc={"/cover/playstation.jpg"}
              />
            </Link>
            <Link to={"/accessories"}>
              <CategorySectionCard
                cardName={"Accessories"}
                imgSrc={"/cover/accessories.jpg"}
              />
            </Link>
            <Link to={"/controllers"}>
              <CategorySectionCard
                cardName={"Controllers"}
                imgSrc={"/cover/controller.jpg"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
