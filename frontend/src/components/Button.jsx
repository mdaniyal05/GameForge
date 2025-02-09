import { useState } from "react";

const Button = ({ text, bgColor, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    button: {
      height: "38px",
      width: "193px",
      backgroundColor: `${bgColor}`,
      border: "none",
      borderRadius: "100px",
      color: `${textColor}`,
      fontWeight: 700,
      transition: "0.5s",
    },
    buttonHover: {
      color: `${textColor}`,
      backgroundColor: "white",
      transition: "0.5s",
    },
  };

  return (
    <>
      <div className="button-cont">
        <button
          type="button"
          style={
            isHovered ? { ...style.button, ...style.buttonHover } : style.button
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
