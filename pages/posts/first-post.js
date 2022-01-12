import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <br />
        <Image
          src="/images/Mexico-4.jpg"
          alt="Justin Wallace"
          width={800}
          height={509}
        />
      </h2>
    </Layout>
  );
}

export default FirstPost;
