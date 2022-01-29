import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Image from "next/image";

function Custom404() {
  return (
    <>
      <Head>
        <title>BetterMind - Oops! </title>
        <meta
          name="description"
          content="404 - error, this page wasn't found in our directory"
        />
      </Head>
      <div className="error">
        <Header />
        <main className="px-1">
          <Image
            width={200}
            height={200}
            src="/images/logo-brain.webp"
            alt="The brain logo of BetterMind.com"
            priority
            className="brain"
          />
          <h2>404</h2>
          <h4>Seems as though we forgot where we put this page...</h4>
          <Button to="/">Back Home</Button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Custom404;
