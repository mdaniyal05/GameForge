import "../css/discountSection.css";
import Button from "./Button";

const DiscountSection = () => {
  return (
    <>
      <div className="discount-cont">
        <span className="spend-save">SPEND & SAVE</span>
        <span className="save">Save 20% when you spend more than $125</span>
        <Button
          text={"Shop Now"}
          bgColor={"#8355e5"}
          color={"white"}
          height={"50px"}
          width={"155px"}
        />
      </div>
    </>
  );
};

export default DiscountSection;
