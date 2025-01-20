import "../css/dealsSection.css";

const DealsSection = () => {
  return (
    <>
      <div className="deals-section-cont">
        <div className="chrono-split">
          <img
            src="./chronosplitCover.jpg"
            alt="Chrono Split"
            width={400}
            height={530}
          />
        </div>
        <div className="dead-at-last">
          <img
            src="./deadAtLastCover.jpg"
            alt="Dead At Last"
            width={400}
            height={530}
          />
        </div>
        <div className="kira">
          <img src="./kiraCover.jpg" alt="Kira" width={400} height={530} />
        </div>
      </div>
    </>
  );
};

export default DealsSection;
