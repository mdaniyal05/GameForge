import "../css/newsLetterSection.css";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NewsLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="news-letter-cont" ref={ref}>
        {isInView ? (
          <motion.div
            className="heading-cont"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="news-letter-heading">NEWSLETTER</h2>
            <p className="news-letter-desc">
              Sign up to receive updates on new products and special offers
            </p>
          </motion.div>
        ) : (
          <></>
        )}
        <div className="email-cont">
          <div className="email-input">
            <label htmlFor="email">Email *</label>
            <input type="email" />
          </div>
          <div className="email-input2">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Yes, subscribe me to your newsletter.
            </label>
            <Button
              text={"Submit"}
              bgColor={"white"}
              color={"black"}
              height={"46px"}
              width={"180px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterSection;
