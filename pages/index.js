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
      <Footer />
    </>
  );
}
