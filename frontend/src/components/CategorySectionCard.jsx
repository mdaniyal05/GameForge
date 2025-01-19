import "../css/categorySectionCard.css";

const CategorySectionCard = ({ cardName, imgSrc }) => {
  return (
    <>
      <div className="card-cont">
        <div className="card-image">
          <img src={imgSrc} alt={cardName} height={550} width={400} />
        </div>
        <span className="card-name">{cardName}</span>
      </div>
    </>
  );
};

export default CategorySectionCard;
