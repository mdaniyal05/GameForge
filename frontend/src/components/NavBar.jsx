import "../css/navBar.css";
import { PiGameControllerDuotone } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <span
        className="animation"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <Section>
            <PiGameControllerDuotone className="nav-logo-icon" />
            <Link to={"/"}>
              <span className="nav-logo-name">GAMEFORGE</span>
            </Link>
          </Section>
        </div>
        <div className="nav-all-list">
          <li className="nav-list">
            <Link to={"/products"}>
              <ul>Products</ul>
            </Link>
            <Link to={"/on-sales"}>
              <ul>On Sale</ul>
            </Link>
            <Link to={"/contact-us"}>
              <ul>Contact Us</ul>
            </Link>
            <Link to={"/login"}>
              <ul>Log In</ul>
            </Link>
            <Link to={"/cart"}>
              <ul>
                <RiShoppingCartLine className="nav-cart-icon" />
              </ul>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
