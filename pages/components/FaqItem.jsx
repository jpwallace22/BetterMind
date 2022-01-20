import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useState } from "react";

function FaqItem({ faq }) {
  const handleClick = (target) => {
    const div = target.closest("DIV");
    const caret = div.firstChild;
    const panel = div.nextElementSibling;
    const allPanels = document.querySelectorAll(".faq p");
    const allCarets = document.querySelectorAll(".faq svg");
    const allDivs = document.querySelectorAll(".faq-q");
    allPanels.forEach((p) => {
      if (p !== panel) {
        p.style.maxHeight = null;
        p.style.padding = null;
      }
    });
    allDivs.forEach((d) => {
      if (d !== div) {
        d.style.boxShadow = null;
      }
    });
    allCarets.forEach((c) => {
      if (c !== caret) {
        c.style.transform = "rotate(0deg)";
      }
    });

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = null;
      caret.style.transform = null;
      div.style.boxShadow = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 40 + "px";
      panel.style.padding = "2rem 0 0";
      caret.style.transform = "rotate(90deg)";
      div.style.boxShadow = "var(--shadow)";
    }
  };

  return (
    <div className="item-wrapper">
      <div className="faq-q" onClick={({ target }) => handleClick(target)}>
        <FaCaretRight size={30} color="var(--light-blue)" />
        <h3>{faq.q}</h3>
      </div>
      <p>{faq.a}</p>
    </div>
  );
}

FaqItem.defaultProps = {
  faq: {
    q: "",
    a: "",
  },
};

export default FaqItem;
