import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="grid">
      <nav className="footer-links">
        <ul>
          <li>Services</li>
          <li>
            <Link href="/online">
              <a>Online Therapy</a>
            </Link>
          </li>
          <li>
            <Link href="/individual">
              <a>Individual Therapy</a>
            </Link>
          </li>
          <li>
            <Link href="/couples">
              <a>Couple/Marriage</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>Specialties</li>
          <li>
            <Link href="/trauma">
              <a>Trauma &amp; PTSD</a>
            </Link>
          </li>
          <li>
            <Link href="/anxiety">
              <a>Anxiety &amp; Depression</a>
            </Link>
          </li>
          <li>
            <Link href="/stress">
              <a>Stress Management</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>
            <Link href="/philosophy">
              <a>Our Philosophy</a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a>Meet The Team</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="social">
        <ul>
          <li>
            <a href="https://instagram.com">
              <FaFacebookF size={40} />
            </a>
          </li>
          <li>
            <a href="https://facebook.com"></a>
            <FaInstagram size={40} />
          </li>
          <li>
            <a href="https://pintrest.com"></a>
            <FaPinterestP size={40} />
          </li>
          <li>
            <a href="https://twitter.com"></a>
            <FaTwitter size={40} />
          </li>
        </ul>
      </nav>
      <div className="footer-logo"></div>

      <p>
        <small>
          Designed and Developed by{" "}
          <a href="http://thejustinwallace.com">Justin Wallace Development</a>{" "}
          All Rights Reserved Copyright © 2022
        </small>
      </p>
    </footer>
  );
}

export default Footer;
