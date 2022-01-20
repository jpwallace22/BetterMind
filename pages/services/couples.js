import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Couples() {
  const coupleFaq = [
    {
      q: `What if your partner doesn't want to do therapy?`,
      a: `Hopefully you’re both invested in therapy, but chances are, one of you is going to be more into it than the other. “When one person wants to go more than the other, it’s very important that they let their partner know how much they appreciate their willingness to go,” says Roberts. “They should also make it clear that it’s an opportunity for the partner to say what’s on their mind and express how they’re feeling — it’s not just a one-way street.”`,
    },
    {
      q: `Who chooses the therapist?`,
      a: `This depends greatly on the dynamic of your relationship and expectations. However, the therapist is typically chosen together and its not recommended to use a prior individual therapist.`,
    },
  ];

  return (
    <>
      <Head>
        <title>BetterMind - Couples &amp; Marriage Counseling</title>
        <meta
          name="description"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area. We specialize in Trauma, PTSD, and giving aid to those that have given the most to our country. "
        />
      </Head>
      <Header />

      <main className="interior couples grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">Couples &amp; Marriage Counseling</h2>
          <p>
            We all know romantic relationships are hard work. Like cars, they
            require regular maintenance to keep them running well. If there is a
            problem, it’s best to have it repaired right away to avoid further
            complications down the road.
          </p>
        </div>

        <div className="container col-12">
          <div className="grid">
            <section className="services px-1 col-12">
              <article className="card flex">
                <FaSearch
                  size={70}
                  className="mx-auto"
                  color={"var(--light-blue)"}
                />
                <h3 className="mx-auto">What to expect</h3>
                <p>
                  Most couples come away from therapy with greater knowledge of
                  their relational patterns and with the necessary skills to
                  effectively communicate and problem-solve with their partners.{" "}
                </p>
              </article>
              <article className="card flex">
                <FaQuestion
                  size={70}
                  className="mx-auto"
                  color={"var(--light-blue)"}
                />
                <h3 className="mx-auto">Is it for us?</h3>
                <p>
                  Couples therapy can resolve a current problem, prevent an
                  exacerbation of problems or simply provide a “check-up” for a
                  happy couple that is experiencing a period of transition or
                  increased stress.{" "}
                </p>
              </article>
              <article className="card flex">
                <FaClipboardCheck
                  size={70}
                  className="mx-auto"
                  color={"var(--light-blue)"}
                />
                <h3 className="mx-auto">What it is</h3>
                <p>
                  Couples therapy is a type of psychotherapy in which a licensed
                  therapist with clinical experience working with couples helps
                  people involved in a romantic relationship.{" "}
                </p>
              </article>
            </section>
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>The BetterMind approach</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                These are more words.
              </p>
              <p>
                A Ssecond paragraph of whatever is going to go in this section.
                Most likely somthing about our philosophy or something like
                that. And some extra words so the paragraphs arent the same
                size.
              </p>
            </section>

            <h2 className="underline mx-auto col-12">
              Frequently asked questions
            </h2>
            <div className="col-12">
              <Faq faqList={coupleFaq} />
            </div>
            <Button to="/contact" className="col-12 mx-auto">
              Free consultation
            </Button>

            <div className="hex1"></div>
            <div className="hex2"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Couples;
