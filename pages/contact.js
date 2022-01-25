import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Map from "./components/Map";
import ConsultationForm from "./components/ConsultationForm";

function Contact() {
  const title = "Contact Us";
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
      <main className="interior contact grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
        </div>
        <div className="col-12 px-1">
          <div className="content">
            <ConsultationForm />
          </div>
          <section className="principles"></section>
        </div>
        <div className="col-12"></div>
      </main>
      <Map />

      <Footer />
    </>
  );
}

export default Contact;
