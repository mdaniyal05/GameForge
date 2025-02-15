import "../css/discountSection.css";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DiscountSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="discount-cont" ref={ref}>
        <span className="spend-save">SPEND & SAVE</span>
        <span className="save">Save 20% when you spend more than $125</span>
        {isInView ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Button
              text={"Shop Now"}
              bgColor={"#8355e5"}
              color={"white"}
              height={"50px"}
              width={"155px"}
            />
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default DiscountSection;
