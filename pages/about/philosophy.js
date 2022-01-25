import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Philosophy() {
  const title = "Our Philosophy";
  return (
    <>
      <Head>
        <title>BetterMind - {title}</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      <main className="interior philosophy grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
        </div>
        <div className="col-12 px-1">
          <div className="content">
            <p>
              At the heart of quality care, a strong relationship develops
              between patients, their families, and caregivers.
              Relationship-based care makes a significant difference in health
              care with the intent of easing uncertainty and creating a caring
              and healing environment.
            </p>
            <p>
              Hospitals can sometimes leave patients with a sense of
              apprehension and fear, but quality care and and your BetterMind
              team can help remove and ease these anxieties. Relationship-Based
              Care is our Care Delivery Model at BetterMind.{" "}
            </p>
            <p>
              It is a philosophy of caring that places the patient and family at
              the center of all that we do. This philosophy is reflected in
              BetterMind’s Mission, Vision and Values. BetterMind’s health care
              team takes pride in providing the best possible care through
              Relationship-Based Care.
            </p>
          </div>
          <section className="principles">
            <h4>Principles of Relationship-Based Care:</h4>
            <ul className="principles">
              <li>
                The essence of caring is human connection: harmony, healing and
                spirit.
              </li>
              <li>Informed caring is knowledge and skills.</li>
              <li>Everyone has a valuable contribution to make.</li>
              <li>
                Relationships between patients, their families and caregivers
                are at the heart of the care we deliver.
              </li>
              <li>
                A therapeutic relationship between the patient/family and a
                therapist is at the core of quality care.
              </li>
              <li>
                Knowledge of self and self-care are fundamental requirements for
                quality care and healthy interpersonal relationships.
              </li>
              <li>
                Healthy work relationships and environments result in high
                patient, staff and physician satisfaction.
              </li>
              <li>
                People are most satisfied when their roles and daily work
                practices are in alignment with their personal and professional
                values.
              </li>
              <li>
                Empowerment and ownership of work and practice are essential
                elements of Relationship-Based Care.
              </li>
              <li>
                Transformational change happens one relationship at a time.
              </li>
            </ul>{" "}
          </section>
        </div>
        <Button className={"col-12 mx-auto"} to={"/about/team"}>
          Meet the team
        </Button>
        <div className="hex1"></div>
        <div className="hex2"></div>
      </main>

      <Footer />
    </>
  );
}

export default Philosophy;
