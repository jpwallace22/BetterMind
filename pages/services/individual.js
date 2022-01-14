import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Individual() {
  return (
    <>
      <Head>
        <title>BetterMind - Individual Therapy</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Individual
      <Footer />
    </>
  );
}

export default Individual;
