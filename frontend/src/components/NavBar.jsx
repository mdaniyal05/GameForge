import "../css/navBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <span className="nav-logo-name">GAMEFORGE</span>
        </div>
        <div className="nav-list">
          <li className="list">
            <ul>Products</ul>
            <ul>On Sale</ul>
            <ul>Contact Us</ul>
            <ul>Log In</ul>
            <ul>Cart</ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
