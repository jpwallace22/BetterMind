import React from "react";
import Image from "next/image";

function TeamMember({ image, alt, name, title, description }) {
  const handleClick = (target) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      console.log(window.matchMedia("(max-width: 900px)"));
      const currentlyOpened = document.querySelector(".show-info");
      if (currentlyOpened && currentlyOpened !== target.closest("li")) {
        currentlyOpened.classList.remove("show-info");
      }
      target.closest("li").classList.toggle("show-info");
    }
    return;
  };

  return (
    <li
      className="hex-grid__item"
      onClick={({ target }) => handleClick(target)}
    >
      <div className="hex-grid__content">
        <div className="about">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <Image priority={true} src={image} alt={alt} layout="fill" />
      </div>
    </li>
  );
}

TeamMember.defaultProps = {
  image: "",
  alt: "",
  description: "",
  title: "",
  name: "",
};
export default TeamMember;
