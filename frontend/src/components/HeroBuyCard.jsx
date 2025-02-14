import "../css/heroBuyCard.css";
import { motion } from "framer-motion";
import Button from "./Button";

const HeroBuyCard = () => {
  return (
    <>
      <motion.div
        className="hero-buy-card"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0.4,
        }}
      >
        <h1 className="card-heading-1">Power up your game</h1>
        <p className="hero-card-product">CYBER KID INFINITE</p>
        <p className="now-available">Now Available on PC & Console</p>
        <div className="hero-buy-now">
          <Button
            text={"Buy Now"}
            bgColor={"white"}
            color={"#8355e5"}
            height={"48px"}
            width={"132px"}
          />
        </div>
      </motion.div>
    </>
  );
};

export default HeroBuyCard;
