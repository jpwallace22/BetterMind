import styles from "./header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GoThreeBars } from "react-icons/go";
import { FaTimes, FaCaretRight, FaCaretDown } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    //closes all menus when the menu is closed
    if (!isActive) {
      const openMenus = document.querySelectorAll(".show");
      openMenus.forEach((menu) => menu.classList.remove("show"));
    }
  });

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>BetterMind</h1>
          </a>
        </Link>
      </div>
      <nav>
        <ul className={isActive && "active"}>
          <li className="dropdown">
            <a
              className={
                router.pathname.split("/")[1] === "services" ? "active" : null
              }
              onClick={({ target }) =>
                target.parentElement.classList.toggle("show")
              }
            >
              Services {isActive && <FaCaretRight />}
            </a>
            <ul>
              <li>
                <a href="#">Online Therapy</a>
              </li>
              <li>
                <a href="#">Individual Therapy</a>
              </li>
              <li>
                <a href="#">Couples/Marriage Counseling</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className={
                router.pathname.split("/")[1] === "specialties"
                  ? "active"
                  : null
              }
              onClick={({ target }) =>
                target.parentElement.classList.toggle("show")
              }
            >
              Specialties
            </a>
            <ul>
              <li>
                <a href="#">Trauma &amp; PTSD</a>
              </li>
              <li>
                <a href="#">Anxiety/Depression</a>
              </li>
              <li>
                <a href="#">Stress Management</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              className={
                router.pathname.split("/")[1] === "about-us" ? "active" : null
              }
              onClick={({ target }) =>
                target.parentElement.classList.toggle("show")
              }
            >
              About Us
            </a>
            <ul>
              <li>
                <a href="#">Our Philosophy</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={
                router.pathname.split("/")[1] === "contact" ? "active" : null
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a>Subscribe</a>
          </li>
        </ul>
        {!isActive && (
          <GoThreeBars
            className="burger"
            onClick={() => setIsActive(!isActive)}
          />
        )}
        {isActive && (
          <FaTimes className="burger" onClick={() => setIsActive(!isActive)} />
        )}
      </nav>
      {isActive && <div className="overlay"></div>}
    </header>
  );
}

export default Header;
