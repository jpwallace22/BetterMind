import React from "react";
import Image from "next/image";

function TeamMember({ image, alt, name, title, description }) {
  return (
    <li className="hex-grid__item">
      <div className="hex-grid__content">
        <div className="about">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <img src={image} alt={alt} layout="fill" />
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
