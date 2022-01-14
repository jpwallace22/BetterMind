import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Team() {
  return (
    <>
      <Head>
        <title>BetterMind - Our Team</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      Our Team
      <Footer />
    </>
  );
}

export default Team;
