import "../css/footer.css";
import { PiGameControllerDuotone } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <div className="footer-options">
          <div className="footer-logo">
            <Link to={"/"}>
              <PiGameControllerDuotone className="footer-logo-icon" />
            </Link>
            <div>GAMEFORGE</div>
          </div>
          <div className="footer-products-cont">
            <div className="footer-products">
              <p>Products</p>
              <li>
                <Link to={"/games"}>
                  <ul>Games</ul>
                </Link>
                <Link to={"/consoles"}>
                  <ul>Consoles</ul>
                </Link>
                <Link to={"/controllers"}>
                  <ul>Controllers</ul>
                </Link>
                <Link to={"/accessories"}>
                  <ul>Accessories</ul>
                </Link>
              </li>
            </div>
            <div className="footer-store">
              <p>Store</p>
              <li>
                <ul>500 Terry Francine Street San Francisco, CA 94158</ul>
                <ul>Mon - Fri: 9am - 9pm</ul>
                <ul>info@mysite.com</ul>
                <ul>123-456-7890</ul>
              </li>
            </div>
            <div className="footer-policy">
              <p>Policy</p>
              <li>
                <Link to={"/terms-conditions"}>
                  <ul>Terms & Conditions</ul>
                </Link>
                <Link to={"/shipping-policy"}>
                  <ul>Shipping Policy</ul>
                </Link>
                <Link to={"/refund-policy"}>
                  <ul>Refund Policy</ul>
                </Link>
                <Link to={"/privacy-policy"}>
                  <ul>Privacy Policy</ul>
                </Link>
                <Link to={"/cookie-policy"}>
                  <ul>Cookie Policy</ul>
                </Link>
                <Link to={"/faq"}>
                  <ul>FAQ</ul>
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="line"></div>
        </div>
        <div className="footer-others">
          <div className="payment-methods">
            <p>Payment Methods</p>
            <img src="/icon/Visa.avif" alt="Visa" />
            <img src="/icon/payPal.avif" alt="Pay Pal" />
            <img src="/icon/masterCard.avif" alt="Master Card" />
            <img src="/icon/JCB.avif" alt="JCB" />
            <img src="/icon/discover.avif" alt="Discover" />
            <img src="/icon/diners.avif" alt="Diners" />
            <img src="/icon/chinaUnionPay.avif" alt="China Union Pay" />
            <img src="/icon/americanExpress.avif" alt="American Express" />
          </div>
          <div className="join-community">
            <p>Join the Community</p>
            <Link to={"/facebook"}>
              <FaFacebookF className="facebook" />
            </Link>
            <Link to={"/instagram"}>
              <FaInstagram className="instagram" />
            </Link>
            <Link to={"/youtube"}>
              <FaYoutube className="youtube" />
            </Link>
            <Link to={"/tiktok"}>
              <FaTiktok className="tiktok" />
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2035 by GAMEFORGE. Powered and secured by GAMEFORGE</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
