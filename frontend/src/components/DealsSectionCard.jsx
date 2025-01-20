const DealsSectionCard = ({ cardImg, cardName }) => {
  return (
    <>
      <div className="card-cont">
        <img src={cardImg} alt={cardName} width={400} height={530} />
      </div>
    </>
  );
};

export default DealsSectionCard;
