import Head from "next/head";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThreeWhats from "../components/ThreeWhats";

function Individual() {
  const title = "Individual Therapy";
  const whatItIs = `Individual therapy can help you learn how to: Move closer to your personal, career, and relational relationship goals. Cope effectively with stress and worry. Overcome depression and grief. Improve your social skills and your ability to connect to others.`;
  const forMe = ` Individual therapy can help you learn how to: Move closer to
  your personal, career, and relational relationship goals. Cope
  effectively with stress and worry. Overcome depression and
  grief. Improve your social skills and your ability to connect
  to others.`;
  const whatToExpect = `Our first session is to listen to your concerns, based on the
  information you provide, recommendations will be made
  regarding the focus and desired outcomes of counseling. The
  strategies and approach used during counseling will be
  determined by your specific goals and personality type.`;

  const individualFaq = [
    {
      q: `What are all the letters behind a therapist's name?`,
      a: `When looking for a therapist, the letters behind their name can describe their training. Some examples:
      Education Level: MA, MS, Med: Masters Degree. PHD, PsyD, EdD: Doctoral Degree
      License: LPC, LCSW: Licensed therapist,(Professional Counselor, Clinical Social Worker) Completed supervised hours PLPC, PLCSW: Provisional therapist, Working on supervised hours after obtaining graduate degree`,
    },
    {
      q: `How long is therapy?`,
      a: `Therapy sessions are typically 45-50 minutes, while groups run longer per session.  Clients typically meet on a weekly or bi weekly basis depending on the client’s needs. Length of time while in therapy will depend on the individual client’s circumstance. The therapist and client will determine that together.`,
    },
    {
      q: `How do therapists work with other professionals?`,
      a: `In order to preserve the continuity of care, it’s important to work with school counselors, pediatricians, primary care physicians, psychiatrists, etc. With written permission, therapists can provide treatment plans or answer questions that other professionals may have. If a client needs their therapist to work with other professionals in their life, please don’t hesitate to ask.
      `,
    },
    {
      q: `What is the difference between seeing a therapist, a psychologist and a psychiatrist?`,
      a: `As mental health therapists / counselors the scope of treatment is talk-therapy.  Typically therapists have their masters degree, and yearly cont. education.  While, psychologists also provide counseling services they also provide psychological testing for schools, courts and other entities. Psychiatrists tend to limit their talk therapy / counseling services and are typically available for medication management. If your therapist feels that you may need medication, they will provide you with a referral to doctors that they may recommend. A psychiatrist is a medical doctor that specialists in behavior. If medication is necessary, typically in these clients, medication and talk therapy are used together. Medication therapy is not a replacement for talk therapy.
      `,
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

      <main className="interior individual grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
          <p>
            You feel overwhelmed, lost, and hopeless. You’re struggling to get
            back to your “normal self” or having trouble working through things
            on your own.{" "}
          </p>
          <p>
            But what if you could evolve into something even better than your
            previous normal self and use the crappy stuff you’ve been dealing
            with to grow into an even stronger and more amazing version of
            yourself?
          </p>
        </div>

        <div className="container col-12">
          <div className="grid">
            <ThreeWhats
              whatItIs={whatItIs}
              whatToExpect={whatToExpect}
              forMe={forMe}
            />
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>The BetterMind approach</h2>
              <p>
                We are here to accompany you on your path to healing in a
                non-shaming, non-pathologizing way.
              </p>
              <p>
                We’ll identify tangible things you can do to start to improve
                your life, as well as look at how past events may be
                contributing to your unease.
              </p>
              <p>
                We know that things grow under pressure, like diamonds, plants,
                and muscles. That’s true for psychological processes, too. By
                that logic, psychological pressure is not only good, but
                necessary for discovering more about who we are and who we can
                be.
              </p>
              <p>
                However, the key to this growth factor is a good therapist who
                can act as a guide for applying just the right amount of
                pressure at just the right time.
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

export default Individual;
