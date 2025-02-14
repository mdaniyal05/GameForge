import { motion } from "framer-motion";

const Button = ({ text, bgColor, color, height, width }) => {
  const style = {
    height: `${height}`,
    width: `${width}`,
    backgroundColor: `${bgColor}`,
    border: `solid 2px ${bgColor}`,
    borderRadius: "100px",
    color: `${color}`,
    fontWeight: "700",
    transition: "0.5s",
  };

  return (
    <>
      <div className="button-cont">
        <motion.button
          style={{ ...style }}
          whileHover={{
            backgroundColor: `${color}`,
            color: `${bgColor}`,
          }}
        >
          {text}
        </motion.button>
      </div>
    </>
  );
};

export default Button;
