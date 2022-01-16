import Image from "next/image";
import Quotes from "../../public/images/quotes.svg";

function Testimonial({ src, alt, children, name, className, handleClick }) {
  return (
    <div
      className={`testimonial-card card ${className}`}
      onClick={({ target }) => handleClick(target)}
    >
      <Image width={90} height={90} alt={alt} src={src} />
      <p>{children}</p>
      <div>{name}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.19 68.48">
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="quotes"
              d="M5.82,60.82Q0,53.16,0,41.32A42.6,42.6,0,0,1,7.47,16.78Q14.94,5.83,28.91,0L45.78,11.25a66.28,66.28,0,0,0-16.49,9,29.93,29.93,0,0,0-9.5,12.13l1,.58a7.74,7.74,0,0,1,6-2.33,19.31,19.31,0,0,1,12.81,4.56Q45,39.77,45,48.5q0,9.7-5.92,14.84t-16,5.14Q11.63,68.48,5.82,60.82Zm51.41,0q-5.82-7.66-5.82-19.5a42.6,42.6,0,0,1,7.47-24.54Q66.35,5.83,80.32,0L97.19,11.25a66.28,66.28,0,0,0-16.49,9A29.93,29.93,0,0,0,71.2,32.4l1,.58a7.74,7.74,0,0,1,6-2.33A19.31,19.31,0,0,1,91,35.21q5.42,4.56,5.43,13.29,0,9.7-5.92,14.84t-16,5.14Q63,68.48,57.23,60.82Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

Testimonial.defaultProps = {
  className: "",
};

export default Testimonial;
