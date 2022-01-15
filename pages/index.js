import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

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
            <button className="btn-primary">free consultation</button>
          </div>
          <div className="hero-image"></div>
          <h2 className="col-12 mx-auto underline">How we can help</h2>
        </main>
      </div>
      <Footer />
    </>
  );
}
