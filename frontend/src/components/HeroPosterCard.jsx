import "../css/heroPosterCard.css";
import { motion } from "framer-motion";

const HeroPosterCard = () => {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 1.5,
        bounce: 0.4,
      }}
      className="hero-card"
    ></motion.div>
  );
};

export default HeroPosterCard;
