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
              imgSrc={"/cover/playstation.jpg"}
            />
            <CategorySectionCard
              cardName={"Accessories"}
              imgSrc={"/cover/accessories.jpg"}
            />
            <CategorySectionCard
              cardName={"Controllers"}
              imgSrc={"/cover/controller.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
