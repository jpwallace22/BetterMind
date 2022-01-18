import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Button from "./components/Button";
import { FaLaptopMedical, FaMale, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const handleClick = (clicked) => {
    const target = clicked.closest(".testimonial-card");
    const currentCenter = document.querySelector(".center");
    currentCenter.classList.remove("center");
    target.classList.add("center");
  };

  return (
    <>
      <Head>
        <title>BetterMind Counseling Collective</title>
        <meta
          name="description"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area. We specialize in Trauma, PTSD, and giving aid to those that have given the most to our country. "
        />
      </Head>
      <Header />

      <main className="homepage grid">
        <div className="hero-content px-1">
          <h2 className="hero">
            Lorem ipsum headline that takes more than one line
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button to="/contact" className="mx-auto hero-cta">
            Free Consultation
          </Button>
        </div>
        <div className="hero-image"></div>
        <div className="container col-12">
          <div className="grid">
            <h2 className="mx-auto underline col-12">How we can help</h2>
            <section className="services px-1 col-12">
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
                <Button to="/services/online" className="mx-auto">
                  learn more
                </Button>
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
                <Button to="/services/individual" className="mx-auto">
                  learn more
                </Button>
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
                <Button to="/services/couples" className="mx-auto">
                  learn more
                </Button>
              </article>
            </section>
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>A headline about our philosophy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                These are more words.
              </p>
              <p>
                A Ssecond paragraph of whatever is going to go in this section.
                Most likely somthing about our philosophy or something like
                that. And some extra words so the paragraphs arent the same
                size.
              </p>
            </section>

            <h2 className="underline mx-auto col-12">What people are saying</h2>
            <section className="testimonials col-12 px-1">
              <Testimonial
                src="/images/testimonial-image-1.webp"
                alt="young asian woman"
                name="Anita Brown"
                handleClick={handleClick}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum sus
              </Testimonial>
              <Testimonial
                src="/images/testimonial-image-2.webp"
                alt="Cool black man with flower in hair"
                name="Aaron Webber"
                handleClick={handleClick}
                className="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum sus
              </Testimonial>
              <Testimonial
                src="/images/testimonial-image-3.webp"
                alt="huge smile on a brunette"
                name="Jen Sasse"
                handleClick={handleClick}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum sus
              </Testimonial>
            </section>

            <Button to="/contact" className="col-12 mx-auto">
              Free consultation
            </Button>

            <div className="hex1"></div>
            <div className="hex2"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
