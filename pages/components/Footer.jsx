import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <nav className="footer-links">
            <ul>
              <li>Services</li>
              <li>
                <Link href="/services/online">
                  <a>Online Therapy</a>
                </Link>
              </li>
              <li>
                <Link href="/services/individual">
                  <a>Individual Therapy</a>
                </Link>
              </li>
              <li>
                <Link href="/services/couples">
                  <a>Couple/Marriage</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>Specialties</li>
              <li>
                <Link href="/specialties/trauma">
                  <a>Trauma &amp; PTSD</a>
                </Link>
              </li>
              <li>
                <Link href="/specialties/anxiety">
                  <a>Anxiety &amp; Depression</a>
                </Link>
              </li>
              <li>
                <Link href="/specialties/stress">
                  <a>Stress Management</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>
                <Link href="/about/philosophy">
                  <a>Our Philosophy</a>
                </Link>
              </li>
              <li>
                <Link href="/about/team">
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
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram size={40} />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebookF size={40} />
                </a>
              </li>
              <li>
                <a href="https://pintrest.com" aria-label="Pinterest">
                  <FaPinterestP size={40} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FaTwitter size={40} />
                </a>
              </li>
            </ul>
          </nav>
          <Link href={"/"} passHref>
            <div className="footer-logo"></div>
          </Link>

          <p>
            <small>
              Designed and Developed by{" "}
              <a
                href="http://thejustinwallace.com"
                target="_blank"
                rel="noreferrer"
              >
                Justin Wallace Development
              </a>{" "}
              All Rights Reserved Copyright © 2022
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
