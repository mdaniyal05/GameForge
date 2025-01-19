import "../css/categorySection.css";

const CategorySection = () => {
  return (
    <>
      <div className="category-section-cont">
        <span className="category-heading">SHOP BY CATEGORY</span>
        <div className="categories-cont">
          <div className="consoles-cont">
            <div className="consoles"></div>
            <span className="consoles-heading">Consoles</span>
          </div>
          <div className="accessories-cont">
            <div className="accessories"></div>
            <span className="accessories-heading">Accessories</span>
          </div>
          <div className="controllers-cont">
            <div className="controllers"></div>
            <span className="controllers-heading">Controllers</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
