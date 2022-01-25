import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThreeWhats from "../components/ThreeWhats";

function Couples() {
  const whatToExpect = `Most couples come away from therapy with greater knowledge of
  their relational patterns and with the necessary skills to
  effectively communicate and problem-solve with their partners.`;
  const whatItIs = `Couples therapy can resolve a current problem, prevent an
  exacerbation of problems or simply provide a “check-up” for a
  happy couple that is experiencing a period of transition or
  increased stress.`;
  const forMe = `Couples therapy is a type of psychotherapy in which a licensed
  therapist with clinical experience working with couples helps
  people involved in a romantic relationship.`;
  const coupleFaq = [
    {
      q: `What if your partner doesn't want to do therapy?`,
      a: `Hopefully you’re both invested in therapy, but chances are, one of you is going to be more into it than the other. “When one person wants to go more than the other, it’s very important that they let their partner know how much they appreciate their willingness to go,” says Roberts. “They should also make it clear that it’s an opportunity for the partner to say what’s on their mind and express how they’re feeling — it’s not just a one-way street.”`,
    },
    {
      q: `Who chooses the therapist?`,
      a: `This depends greatly on the dynamic of your relationship and expectations. However, the therapist is typically chosen together and its not recommended to use a prior individual therapist.`,
    },
    {
      q: `I’m afraid therapy will just make things worse.`,
      a: `People don’t really like talking about their problems, or things that are painful, so they sometimes believe that couple therapy will just make a bad situation worse. But the elephant is still in the room, it is not going away by itself. By committing to couples therapy the problems can all be addressed in a rational, neutral setting and while it might not be very easy it really is easier than suffering in silence and usually very successful, however big the problems seem.`,
    },
    {
      q: `Is the therapist going to tell us to break up?`,
      a: `When a relationship is in trouble most couples really do want to try and save it. The goal of couples therapy is not to make a judgment on whether or not a couple should break up but to help partners understand one another. Some couples do eventually split, but from a much better place than they would have done. Many do give it that ‘extra go’ though and with great success. But that is always up to them.`,
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
            Wondering where all the romance went? Or feeling stuck in a
            relationship where “taking breaks” and the “silent treatment” just
            aren’t working? Maybe you’re feeling like your intimacy or sex life
            is stale? Maybe there’s been infidelity? Or maybe you just need a
            higher level of understanding and communication? There are many
            reasons to seek couples counseling. Whatever the reason, know that
            you are not alone.{" "}
          </p>
          <p>
            We all know romantic relationships are hard work. Like cars, they
            require regular maintenance to keep them running well. If there is a
            problem, it’s best to have it repaired right away to avoid further
            complications down the road.
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
              <h2>Our approach</h2>
              <p>
                Cognitive-behavioral therapy (CBT), which was originally
                designed for individual use to treat such issues as anxiety,
                depression , substance abuse, and eating disorders, centers
                around the notion that your thoughts influence your behaviors.
              </p>
              <p>
                A CBT therapist will initially focus on identifying what each
                partner is thinking about the conflicts that have brought them
                to couples counseling. One&apos;s beliefs may be challenged in
                order to help each partner develop better methods of
                communicating.
              </p>
              <p>
                Research has shown that CBT is effective in treating
                communication difficulties as well as conflict resolution.
              </p>
            </section>

            <h2 className="underline mx-auto col-12">FAQ&apos;s</h2>
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
