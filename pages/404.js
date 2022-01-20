import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";

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
          <h2>404</h2>
          <h4>Uh oh, looks like we may have misplaced this page...</h4>
          <Button to="/">Back Home</Button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Custom404;
