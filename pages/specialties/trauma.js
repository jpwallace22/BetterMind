import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Trauma() {
  return (
    <>
      <Head>
        <title>BetterMind - Trauma &amp; PTSD</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Trauma
      <Footer />
    </>
  );
}

export default Trauma;
