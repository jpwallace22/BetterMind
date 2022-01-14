import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Anxiety() {
  return (
    <>
      <Head>
        <title>BetterMind - Anxiety &amp; Depression</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Anxiety
      <Footer />
    </>
  );
}

export default Anxiety;
