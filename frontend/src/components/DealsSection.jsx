import "../css/dealsSection.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DealsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="deals-section-cont" ref={ref}>
        {isInView ? (
          <div className="deals-cont">
            <motion.div
              className="weeks-deals"
              initial={{ x: -150, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "keyframes",
                duration: 1,
              }}
            >
              <h2>
                <span className="this-week">THIS WEEK&apos;S DEALS</span>
              </h2>
              <span className="discount">10%</span>
              <p>off all games</p>
              <button className="deals-button">Shop Now</button>
            </motion.div>
            <div className="kira">
              <motion.img
                src="/cover/kiraCover.jpg"
                alt="Kira"
                width={400}
                height={530}
                initial={{ x: -100, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "keyframes",
                  duration: 1,
                }}
              />
            </div>
            <div className="dead-at-last">
              <motion.img
                src="/cover/deadAtLastCover.jpg"
                alt="Dead At Last"
                width={400}
                height={530}
                initial={{ y: 100, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "keyframes",
                  duration: 1,
                }}
              />
            </div>
            <div className="chrono-split">
              <motion.img
                src="/cover/chronosplitCover.jpg"
                alt="Chrono Split"
                width={400}
                height={530}
                initial={{ x: 100, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "keyframes",
                  duration: 1,
                }}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default DealsSection;
