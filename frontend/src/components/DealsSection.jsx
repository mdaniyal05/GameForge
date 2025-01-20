import "../css/dealsSection.css";
import DealsSectionCard from "../components/DealsSectionCard";

const DealsSection = () => {
  return (
    <>
      <div className="deals-section-cont">
        <div className="cards-cont">
          <DealsSectionCard
            cardImg={"./chronoSplitCover.jpg"}
            cardName={"Chrono Split"}
          />
          <DealsSectionCard
            cardImg={"./deadAtLastCover.jpg"}
            cardName={"Dead At Last"}
          />
          <DealsSectionCard cardImg={"./kiraCover.jpg"} cardName={"Kira"} />
        </div>
      </div>
    </>
  );
};

export default DealsSection;
