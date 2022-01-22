import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Anxiety() {
  const title = "Anxiety & Depression";

  const individualFaq = [
    {
      q: ``,
      a: ``,
    },
    {
      q: ``,
      a: ``,
    },
    {
      q: ``,
      a: ``,
    },
    {
      q: ``,
      a: ``,
    },
    {
      q: ``,
      a: ``,
    },
    // {
    //   q:``,
    //   a:``,
    // },
  ];

  return (
    <>
      <Head>
        <title>BetterMind - {title}</title>
        <meta
          name="description"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area. We specialize in Trauma, PTSD, and giving aid to those that have given the most to our country. "
        />
      </Head>
      <Header />

      <main className="interior anxiety grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
          <p>
            Trauma wears many faces. It can be abandonment by a parental figure
            from a young age that left you feeling like you’re a burden or
            unlovable, sexual abuse/assault, physical or verbal abuse from a
            loved one, combat overseas, or even not being in combat and laying
            witness to the horrors of war.{" "}
          </p>
          <p>
            Trying to cope with the pain of these experiences isn’t easy.
            Perhaps you go on dates but feel nervous or scared that you might
            find yourself in a dangerous situation. Or maybe you’re irritable or
            angry at work, and the guilt you’re experiencing is projecting anger
            onto people you love and care about in your life. Feeling trapped
            because you don’t do what you need to do to feel better (even if you
            know what those things are!).
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
                  Trauma therapy may include learning new self-care skills,
                  including setting boundaries with loved ones, taking quiet
                  time for yourself, and learning new coping skills. Trauma
                  therapy will teach you new ways to calm and soothe yourself
                  when this happens.{" "}
                </p>
              </article>
              <article className="card flex">
                <FaQuestion
                  size={70}
                  className="mx-auto"
                  color={"var(--light-blue)"}
                />
                <h3 className="mx-auto">Is it for me?</h3>
                <p>
                  Trauma experienced when young affects the mental well-being of
                  individuals throughout life. If you are wondering, “Is this
                  kind of therapy right for me?” and you have experienced trauma
                  in your life, the answer is a resounding yes.{" "}
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
                  Trauma is an emotional response to a terrible event like an
                  accident, rape or natural disaster. Immediately after the
                  event, shock and denial are typical. Longer term reactions
                  include unpredictable emotions, flashbacks, strained
                  relationships and even physical symptoms like headaches or
                  nausea.{" "}
                </p>
              </article>
            </section>
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>The BetterMind approach</h2>
              <p>
                Traditional talk therapy won’t work for many with PTSD because
                they don’t have access to the prefrontal cortex where that kind
                of therapy is effective.
              </p>
              <p>
                Trauma is usually stuck in the lower parts of our brain, and we
                must first calm down that part of the brain if we’re ever to
                reach that top part where we can think clearly and rationally
                about the events and make the changes we so desperately want.
              </p>
              <p>
                So, when treating trauma, we take a bottom-up (rather than a
                top-down) approach. Eye Movement Desensitization and
                Reprocessing (EMDR), Somatic Experiencing, and mindfulness are
                examples of these bottom-up approaches.
              </p>
            </section>

            <h2 className="underline mx-auto col-12">
              Frequently asked questions
            </h2>
            <div className="col-12">
              <Faq faqList={individualFaq} />
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

export default Anxiety;
