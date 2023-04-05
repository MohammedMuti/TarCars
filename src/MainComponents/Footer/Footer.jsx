import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-1">
          <div className="footer-1-Links">
            <Link>Terms & Conditions</Link>
            <span>|</span>
            <Link>Privacy Policy </Link>
            <span>|</span>
            <Link>Contact Us</Link>
            <span>|</span>
            <Link>Sitemap</Link>
          </div>
          <div className="footer-1-icons">
            <i className="fa-brands fa-facebook-square"></i>

            <i className="fa-brands fa-instagram"></i>

            <i className="fa-brands fa-whatsapp"></i>

            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="footer-2">
          <p>Copyright © TARCARS. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
