import "../css/newsLetterSection.css";

const NewsLetterSection = () => {
  return (
    <>
      <div className="news-letter-cont">
        <div className="heading-cont">
          <h2>
            <span className="news-letter-heading">NEWSLETTER</span>
          </h2>
          <p className="news-letter-desc">
            Sign up to receive updates on new products and special offers
          </p>
        </div>
        <div className="email-cont">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="email-input2">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterSection;
