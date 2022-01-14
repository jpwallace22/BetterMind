import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Philosophy() {
  return (
    <>
      <Head>
        <title>BetterMind - Our Philosophy</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Philosophy
      <Footer />
    </>
  );
}

export default Philosophy;
