import { useState, useRef } from "react";
import Testimonial from "./Testimonial";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { testimonialList } from "../../public/teamData";

function HorizontalScroll() {
  let scrl = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className="horizontal-scroll">
      {scrollX !== 0 && (
        <button className="prev" onClick={() => slide(-480)}>
          <FaAngleLeft size={60} color="var(--dark-blue)" />
        </button>
      )}
      <ul ref={scrl} onScroll={scrollCheck}>
        {testimonialList.map((test, index) => (
          <li key={index}>
            <Testimonial
              src={test.src}
              alt={test.alt}
              name={test.name}
              input={test.input}
            />
          </li>
        ))}
      </ul>
      {!scrollEnd && (
        <button className="next" onClick={() => slide(+480)}>
          <FaAngleRight size={60} color="var(--dark-blue)" />
        </button>
      )}
    </div>
  );
}

export default HorizontalScroll;
