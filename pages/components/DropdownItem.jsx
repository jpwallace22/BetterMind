import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function DropdownItem({ title, children, menuOpen, services, special, about }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  //closes all other dropdown menus other than the one
  const closeAllMenus = (target) => {
    const openMenus = document.querySelectorAll(".show");
    openMenus.forEach((menu) =>
      menu !== target ? menu.classList.remove("show") : null
    );
  };

  // closes none active windows and opens the selected dropdown
  const handleClick = (target) => {
    if (window.matchMedia("(min-width: 900px)").matches) {
      closeAllMenus(target);
    }
    target.classList.toggle("show");
    setIsActive(!isActive);
  };

  //if the slide down menu closes, this closes all the interior slides as well
  useEffect(() => {
    if (!menuOpen) {
      setIsActive(false);
    }
  }, [menuOpen]);

  return (
    <li
      className={`dropdown 
      ${
        services & (router.pathname.split("/")[1] === "services") && "active"
      } ${
        special & (router.pathname.split("/")[1] === "specialties") && "active"
      } ${about & (router.pathname.split("/")[1] === "about") && "active"}`}
      onClick={({ target }) => handleClick(target)}
    >
      {title}{" "}
      {isActive ? (
        <FaCaretDown className="caret" />
      ) : (
        //cart shows down when open and right when closed
        <FaCaretRight className="caret" />
      )}
      {children}
    </li>
  );
}

DropdownItem.defaultProps = {
  services: false,
  special: false,
  about: false,
};

export default DropdownItem;
