import "../css/navBar.css";
import { FaFantasyFlightGames } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <FaFantasyFlightGames className="nav-logo-icon" />
          <span className="nav-logo-name">GAMEFORGE</span>
        </div>
        <div className="nav-all-list">
          <li className="nav-list">
            <ul>Products</ul>
            <ul>On Sale</ul>
            <ul>Contact Us</ul>
            <ul>Log In</ul>
            <ul>
              <RiShoppingCartLine className="nav-cart-icon"/>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
