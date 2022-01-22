import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import ThreeServices from "./components/ThreeServices";
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
        <link rel="manifest" href="images/site.webmanifest" />
      </Head>
      <Header />

      <main className="homepage grid">
        <div className="hero-content px-1">
          <h2 className="hero">Come see us you son of a bitch!</h2>
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
            <ThreeServices />
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>A little about our philosophy</h2>
              <p>
                We don’t have stuffy offices as you might find in a medical
                practice. Our therapy rooms are warm and cozy. You’ll feel like
                you’re sitting in our living room.
              </p>
              <p>
                We don’t have impersonal therapists who can’t distinguish you
                and your situation from other clients. We excel in client care
                and will treat you as the unique person you are.
              </p>
              <p>
                We’ll never judge you. You’ll feel relaxed and cared for by our
                compassionate and genuine therapists. We respect all
                relationship types, people with all religious beliefs and from
                all cultures.
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
