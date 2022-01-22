import React from "react";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";

function ThreeWhats({ whatToExpect, whatItIs, forMe }) {
  return (
    <section className="services px-1 col-12">
      <article className="card flex">
        <FaClipboardCheck
          size={70}
          className="mx-auto"
          color={"var(--light-blue)"}
        />
        <h3 className="mx-auto">What it is</h3>
        <p>{forMe} </p>
      </article>

      <article className="card flex">
        <FaQuestion size={70} className="mx-auto" color={"var(--light-blue)"} />
        <h3 className="mx-auto">Is it for us?</h3>
        <p>{whatItIs} </p>
      </article>

      <article className="card flex">
        <FaSearch size={70} className="mx-auto" color={"var(--light-blue)"} />
        <h3 className="mx-auto">What to expect</h3>
        <p>{whatToExpect} </p>
      </article>
    </section>
  );
}

ThreeWhats.defaultProps = {
  whatToExpect: "",
  whatItIs: "",
  forMe: "",
};

export default ThreeWhats;
