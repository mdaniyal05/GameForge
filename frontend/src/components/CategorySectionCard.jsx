const CategorySectionCard = ({ cardName, imgSrc }) => {
  return (
    <>
      <div className="card-cont">
        <div className="card-image">
          <img src={imgSrc} alt={cardName} />
        </div>
        <span className="card-name">{cardName}</span>
      </div>
    </>
  );
};

export default CategorySectionCard;
