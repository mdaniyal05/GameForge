import "../css/categorySection.css";
import CategorySectionCard from "./CategorySectionCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CategorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="category-section-cont">
        <div className="category-section-cont2">
          <h2 className="category-heading" ref={ref}>
            {isInView ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                SHOP BY CATEGORY
              </motion.span>
            ) : (
              <></>
            )}
          </h2>
          <div className="categories-cont">
            <CategorySectionCard
              cardName={"Consoles"}
              imgSrc={"/cover/playstation.jpg"}
            />
            <CategorySectionCard
              cardName={"Accessories"}
              imgSrc={"/cover/accessories.jpg"}
            />
            <CategorySectionCard
              cardName={"Controllers"}
              imgSrc={"/cover/controller.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
