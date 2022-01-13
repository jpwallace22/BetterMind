import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function DropdownItem({ title, children, menuOpen }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!menuOpen) {
      setIsActive(false);
    }
  }, [menuOpen]);

  return (
    <li className="dropdown">
      <a
        className={
          router.pathname.split("/")[1] === "services" ? "active" : null
        }
        onClick={({ target }) => {
          target.parentElement.classList.toggle("show");
          setIsActive(!isActive);
        }}
      >
        {title}{" "}
        {isActive ? (
          <FaCaretDown data-fa-transform="rotate-180" className="caret" />
        ) : (
          <FaCaretRight className="caret" />
        )}
      </a>
      {children}
    </li>
  );
}

export default DropdownItem;
