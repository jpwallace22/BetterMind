import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FaTimes, FaGripLines, FaMailBulk } from "react-icons/fa";
import DropdownItem from "./DropdownItem";

function Header() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  let ref = useRef(null);
  let sub = useRef(null);

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

  //mouse over for email subscription
  const handleMouseOver = (e) => {
    if (!e.target.disabled) {
      const rect = e.target.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.bottom) / rect.height) * 100;
      e.target.style.background = `radial-gradient(
              circle at ${mouseX}% ${mouseY + 100}%,
              rgba(40, 190, 172, 1),
              rgba(24, 96, 139, 1)
            )`;
    }
  };

  //closes menus when clicking outside of the header (for good ux)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeAllMenus();
    }
    if (sub.current && !sub.current.contains(event.target)) {
      setSubscribeOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setSubscribeOpen(false);
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
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <header ref={ref}>
      <div className={`container ${isActive && "active"}`}>
        <div className={`logo ${isActive && "active"}`}>
          <Link href="/">
            <a>
              <h1>BetterMind</h1>
            </a>
          </Link>
        </div>
        <nav>
          <ul className={isActive ? "active" : undefined}>
            <DropdownItem title="Services" menuOpen={isActive} services>
              <ul>
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
                    <a>Couples/Marriage Counseling</a>
                  </Link>
                </li>
              </ul>
            </DropdownItem>
            <DropdownItem title="Specialties" menuOpen={isActive} special>
              <ul>
                <li>
                  <Link href="/specialties/trauma">
                    <a>Trauma &amp; PTSD</a>
                  </Link>
                </li>
                <li>
                  <Link href="/specialties/anxiety">
                    <a>Anxiety/Depression</a>
                  </Link>
                </li>
                <li>
                  <Link href="/specialties/stress">
                    <a>Stress Management</a>
                  </Link>
                </li>
              </ul>
            </DropdownItem>
            <DropdownItem title="About Us" menuOpen={isActive} about>
              <ul>
                <li>
                  <Link href="/about/philosophy">
                    <a>Our Philosophy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/team">
                    <a>Our Team</a>
                  </Link>
                </li>
              </ul>
            </DropdownItem>
            <li
              className={
                router.pathname.split("/")[1] === "contact" ? "active" : null
              }
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li onClick={() => setSubscribeOpen(true)}>
              <span>Subscribe</span>
            </li>
          </ul>
          {!isActive && (
            <FaGripLines
              className="burger"
              onClick={() => setIsActive(!isActive)}
            />
          )}
          {isActive && (
            <FaTimes
              className="burger"
              onClick={() => setIsActive(!isActive)}
            />
          )}
        </nav>
      </div>
      {isActive && <div className="overlay"></div>}
      {subscribeOpen && (
        <div className="subscribe-wrapper">
          <div className="subscribe card" ref={sub}>
            <form>
              <FaMailBulk size={90} color="var(--light-blue)" />
              <label htmlFor="subscribe">
                <h2>Enter your email address</h2>
              </label>
              <p>
                And we’ll keep you up to date with the most pertinent mental
                health information on the planet!
              </p>
              <input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Email Address"
              />
              <button
                className="btn-primary"
                onPointerMove={handleMouseOver}
                onPointerLeave={({ target }) =>
                  !target.disabled
                    ? (target.style.background = "var(--dark-blue)")
                    : null
                }
              >
                Subscribe
              </button>
            </form>
            <div className="close" onClick={() => setSubscribeOpen(false)}>
              <FaTimes size={30} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
