import React, { useState } from "react";

function ConsultationForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("select");

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
  return (
    <form className="card">
      <h3>Consultation Form</h3>
      <p>
        Simply fill out the form and we will have a specialist contact you to
        set an appointment. It’s as easy as that!
      </p>
      <div className="floating">
        <input
          type="text"
          name="fname"
          value={fname}
          className="floating-input"
          placeholder="name"
          onChange={({ target }) => setFname(target.value)}
          required
        />
        <label
          htmlFor="fname"
          data-content="First Name"
          className="floating-label"
        >
          <span className="hidden-visually">First Name</span>
        </label>
      </div>

      <div className="floating">
        <input
          type="text"
          name="lname"
          value={lname}
          className="floating-input"
          placeholder="last name"
          onChange={({ target }) => setLname(target.value)}
          required
        />
        <label
          htmlFor="lname"
          className="floating-label"
          data-content="Last Name"
        >
          <span className="hidden-visually">Last Name</span>
        </label>
      </div>

      <div className="floating">
        <input
          type="email"
          name="email"
          value={email}
          className="floating-input"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <label
          htmlFor="email"
          className="floating-label"
          data-content="Email Address"
        >
          {" "}
          <span className="hidden-visually">Email Address</span>
        </label>
      </div>

      <div className="floating">
        <input
          type="tel"
          name="phone"
          value={phone}
          className="floating-input"
          placeholder="phone"
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <label
          htmlFor="phone"
          className="floating-label"
          data-content="Phone Number"
        >
          {" "}
          <span className="hidden-visually">Phone Number</span>
        </label>
      </div>

      <div className="floating">
        <label htmlFor="service">
          <span className="hidden-visually">Service</span>
        </label>
        <select
          name="service"
          id="service"
          value={service}
          className="floating-input"
          onChange={({ target }) => setService(target.value)}
        >
          <option value="select" disabled>
            Select a service
          </option>
          <option value="online">Online Therapy</option>
          <option value="individual">Individual Therapy</option>
          <option value="couples">Couples Counseling</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn-primary mx-auto"
        disabled={!fname || !lname || !email || service === "select"}
        onPointerMove={handleMouseOver}
        onPointerLeave={({ target }) =>
          !target.disabled
            ? (target.style.background = "var(--dark-blue)")
            : null
        }
      >
        Submit
      </button>
    </form>
  );
}

export default ConsultationForm;
