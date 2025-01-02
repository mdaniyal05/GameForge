import "../css/navBar.css";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <FaFantasyFlightGames className="nav-logo-icon" />
          <Link to={"/"}>
            <span className="nav-logo-name">GAMEFORGE</span>
          </Link>
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
            <ul>
              <RiShoppingCartLine className="nav-cart-icon" />
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
