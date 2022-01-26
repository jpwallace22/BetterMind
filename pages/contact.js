import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Map from "./components/Map";
import ConsultationForm from "./components/ConsultationForm";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

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
            <div className="info">
              <div className="info-links">
                <h4>
                  <a href="tel:1(619) 234-1274">
                    <MdPhoneIphone /> {`(619) 234-1274`}
                  </a>
                </h4>
                <h4>
                  <a href="mailto:jeb.gengenagel@gmail.com">
                    <MdEmail /> info@BetterMind.com
                  </a>
                </h4>
                <h4>
                  <a href="fax:+358.555.1234567">
                    <FaFax /> (358) 555-1234 ext 567
                  </a>
                </h4>
                <h4>
                  <a
                    href="https://www.google.com/maps/place/516+Mission+Ave,+San+Diego,+CA+92116/@32.7573919,-117.1481421,17z/data=!3m1!4b1!4m5!3m4!1s0x80d954e1a7884fdd:0x2d6ae394e7a33e3f!8m2!3d32.7573919!4d-117.1459534"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GrMapLocation /> 516 Mission Ave, 92116
                  </a>
                </h4>
              </div>
              <div className="info-image"></div>
            </div>
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
