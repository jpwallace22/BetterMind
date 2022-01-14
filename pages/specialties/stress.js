import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Stress() {
  return (
    <>
      <Head>
        <title>BetterMind - Stress Management</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Stress
      <Footer />
    </>
  );
}

export default Stress;
