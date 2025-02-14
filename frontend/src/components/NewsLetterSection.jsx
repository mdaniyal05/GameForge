import "../css/newsLetterSection.css";
import Button from "./Button";

const NewsLetterSection = () => {
  return (
    <>
      <div className="news-letter-cont">
        <div className="heading-cont">
          <h2 className="news-letter-heading">NEWSLETTER</h2>
          <p className="news-letter-desc">
            Sign up to receive updates on new products and special offers
          </p>
        </div>
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
