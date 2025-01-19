import "../css/categorySection.css";
import CategorySectionCard from "./CategorySectionCard";

const CategorySection = () => {
  return (
    <>
      <div className="category-section-cont">
        <div className="category-section-cont2">
          <h2 className="category-heading">
            <span>SHOP BY CATEGORY</span>
          </h2>
          <div className="categories-cont">
            <CategorySectionCard
              cardName={"Consoles"}
              imgSrc={"./waveGen.jpg"}
            />
            <CategorySectionCard
              cardName={"Accessories"}
              imgSrc={"./accessories.jpg"}
            />
            <CategorySectionCard
              cardName={"Controllers"}
              imgSrc={"./controller.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
