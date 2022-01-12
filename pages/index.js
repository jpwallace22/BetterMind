import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="posts/first-post">
          <a>this is the homepage</a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
}
