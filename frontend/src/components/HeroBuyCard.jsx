import "../css/heroBuyCard.css";
import { motion } from "framer-motion";

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
        <div className="hero-buy-now">Buy Now</div>
      </motion.div>
    </>
  );
};

export default HeroBuyCard;
