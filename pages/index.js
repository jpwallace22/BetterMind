import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Button from "./components/Button";
import { FaLaptopMedical, FaMale, FaUserFriends } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>BetterMind Counseling Collective</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      <div className="container">
        <main className="homepage grid">
          <div className="hero-content px-1">
            <h2 className="hero">
              Lorem ipsum headline that takes more than one line
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button to="/contact">Free Consultation</Button>
          </div>
          <div className="hero-image"></div>
          <section className="services px-1 col-12">
            <h2 className="mx-auto underline">How we can help</h2>
            <article className="card flex">
              <FaLaptopMedical
                size={70}
                className="mx-auto"
                color={"var(--light-blue)"}
              />
              <h3 className="mx-auto">Telehealth</h3>
              <p className="three-lines">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna{" "}
              </p>
              <button className="btn-primary mx-auto">Learn more</button>
            </article>
            <article className="card flex">
              <FaMale
                size={70}
                className="mx-auto"
                color={"var(--light-blue)"}
              />
              <h3 className="mx-auto">Individual</h3>
              <p className="three-lines">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna{" "}
              </p>
              <button className="btn-primary mx-auto">Learn more</button>
            </article>
            <article className="card flex">
              <FaUserFriends
                size={70}
                className="mx-auto"
                color={"var(--light-blue)"}
              />
              <h3 className="mx-auto">Couples</h3>
              <p className="three-lines">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna Lorem
                ipsum dolor sit amet, conse ctetur adipi scing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna{" "}
              </p>
              <button className="btn-primary mx-auto">Learn more</button>
            </article>
          </section>
          <div className="phil-image"></div>
          <section className="philosophy col-12 px-1">
            <h2>A headline about our philosophy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. These
              are more words.
            </p>
            <p>
              A Ssecond paragraph of whatever is going to go in this section.
              Most likely somthing about our philosophy or something like that.
              And some extra words so the paragraphs arent the same size.
            </p>
          </section>

          <section className="testimonials col-12 px-1">
            <h2 className="underline mx-auto">What people are saying</h2>
            <Testimonial
              src="/images/testimonial-image-1.webp"
              alt="young asian woman"
              name="Anita Brown"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum sus
            </Testimonial>
            <Testimonial
              src="/images/testimonial-image-2.webp"
              alt="Cool black man with flower in hair"
              name="Aaron Webber"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum sus
            </Testimonial>
            <Testimonial
              src="/images/testimonial-image-3.webp"
              alt="huge smile on a brunette"
              name="Jen Sasse"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum sus
            </Testimonial>
          </section>

          <Button to="/contact" className="col-12 mx-auto">
            Free consultation
          </Button>
        </main>
      </div>
      <Footer />
    </>
  );
}
