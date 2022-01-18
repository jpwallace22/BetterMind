import Link from "next/link";

function Button({ to, className, children }) {
  // mouse over creates a gradient that follows the mouse
  const handleMouseOver = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.bottom) / rect.height) * 100;
    e.target.style.background = `radial-gradient(
      circle at ${mouseX}% ${mouseY + 100}%,
      rgba(40, 190, 172, 1),
      rgba(24, 96, 139, 1)
    )`;
  };

  return (
    <div className={className}>
      <Link href={to}>
        <a>
          <button
            onPointerMove={(e) => handleMouseOver(e)}
            // clears gradient from mouse over
            onPointerLeave={({ target }) =>
              (target.style.background = "var(--dark-blue)")
            }
            className={`btn-primary`}
          >
            {children}
          </button>
        </a>
      </Link>
    </div>
  );
}

Button.defaultProps = {
  className: "",
  to: "",
};
export default Button;
