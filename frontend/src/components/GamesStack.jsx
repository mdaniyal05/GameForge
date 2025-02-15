import "../css/gamesStack.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GamesStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="games-stack-cont" ref={ref}>
        {isInView ? (
          <motion.img
            src="/cover/gamesStack.jpg"
            alt="Games Stack"
            className="games-stack"
            initial={{ y: 150, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "keyframes",
              duration: 0.7,
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default GamesStack;
