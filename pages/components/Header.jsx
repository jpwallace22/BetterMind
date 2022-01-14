import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import DropdownItem from "./DropdownItem";

function Header() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  let ref = useRef(null);

  //closes all dropdown menus
  const closeAllMenus = () => {
    const openMenus = document.querySelectorAll(".show");
    openMenus.forEach((menu) => menu.classList.remove("show"));
  };

  //closes dropdowns and sets isActive to false (closing everything)
  const clearAll = () => {
    setIsActive(false);
    closeAllMenus();
  };

  //closes menus when clicking outside of the header (for good ux)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeAllMenus();
    }
  };

  useEffect(() => {
    //closes all menus when the menu is closed for mobile
    if (!isActive) {
      closeAllMenus();
    }
    //closes all menus on window resize
    window.addEventListener("resize", clearAll);
    return window.addEventListener("resize", clearAll);
  });

  //add the click outside of component event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <header ref={ref}>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>BetterMind</h1>
          </a>
        </Link>
      </div>
      <nav>
        <ul className={isActive ? "active" : undefined}>
          <DropdownItem title="Services" menuOpen={isActive}>
            <ul>
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
                  <a>Couples/Marriage Counseling</a>
                </Link>
              </li>
            </ul>
          </DropdownItem>
          <DropdownItem title="Specialties" menuOpen={isActive}>
            <ul>
              <li>
                <Link href="/trauma">
                  <a>Trauma &amp; PTSD</a>
                </Link>
              </li>
              <li>
                <Link href="/anxiety">
                  <a>Anxiety/Depression</a>
                </Link>
              </li>
              <li>
                <Link href="/stress">
                  <a>Stress Management</a>
                </Link>
              </li>
            </ul>
          </DropdownItem>
          <DropdownItem title="About Us" menuOpen={isActive}>
            <ul>
              <li>
                <Link href="/philosophy">
                  <a>Our Philosophy</a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a>Our Team</a>
                </Link>
              </li>
            </ul>
          </DropdownItem>
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
