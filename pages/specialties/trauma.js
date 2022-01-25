import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThreeServices from "../components/ThreeServices";
import ThreeWhats from "../components/ThreeWhats";

function Trauma() {
  const title = "Trauma & PTSD";
  const whatToExpect = `Trauma therapy may include learning new self-care skills,
  including setting boundaries with loved ones, taking quiet
  time for yourself, and learning new coping skills. Trauma
  therapy will teach you new ways to calm and soothe yourself
  when this happens.`;
  const whatItIs = ` Trauma is an emotional response to a terrible event like an
  accident, rape or natural disaster. Immediately after the
  event, shock and denial are typical. Longer term reactions
  include unpredictable emotions, flashbacks, strained
  relationships and even physical symptoms like headaches or
  nausea.`;
  const forMe = `Trauma experienced when young affects the mental well-being of
  individuals throughout life. If you are wondering, “Is this
  kind of therapy right for me?” and you have experienced trauma
  in your life, the answer is a resounding yes.`;

  const individualFaq = [
    {
      q: `Will people with PTSD get better?`,
      a: `"Getting better" means different things for different people. There are many different treatment options for PTSD. For many people, these treatments can get rid of symptoms altogether. Others find they have fewer symptoms or feel that their symptoms are less intense. Your symptoms don't have to interfere with your everyday activities, work, and relationships.`,
    },
    {
      q: ` What is the difference between Acute Stress Disorder & PTSD?`,
      a: `It’s natural to have some symptoms of anxiety after a dangerous event, but they usually go away after a few weeks. This is called Acute Stress Disorder (ASD). When symptoms last for several weeks and become an ongoing problem, it might be PTSD. Sometimes PTSD symptoms don’t appear for weeks or months after traumas.`,
    },
    {
      q: `Can PTSD cause memory loss?`,
      a: `PTSD affects memories associated with the trauma, but it can also limit the mind's ability to store, recall and create other memories. Memories occurring after the trauma may be hazy, have gaps or be lost altogether. It can suddenly become difficult to find familiar places or remember important names, dates and experiences. `,
    },
    {
      q: `What is a trauma?`,
      a: `Trauma literally means “wound, injury, or shock.” In psychological terms, “traumatic events” have traditionally been considered those that harm the psychological integrity of an individual. A given stressful event is not traumatic in itself, but may be so in its effect on a particular individual. Thus not every individual who experiences an extremely stressful event will actually be traumatized, although some types of events are so extreme that they are likely to be traumatizing to most people.`,
    },
    {
      q: `What is a traumatic event?`,
      a: `A traumatic event is a sudden, terrible, overwhelming event. It might be an unexpected death, a suicide attempt by a friend or family member, a physical or sexual assault, another act or threat of violence, the onset of a significant illness, an accident, or a natural disaster such as a hurricane or fire. It might be something that happens to us; it might be something that happens to a person we know or care about, or it might be something we witness.`,
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

      <main className="interior trauma grid">
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
            <ThreeWhats
              whatItIs={whatItIs}
              whatToExpect={whatToExpect}
              forMe={forMe}
              special
            />

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
            <h2 className="underline mx-auto col-12">Our services</h2>
            <ThreeServices />

            <h2 className="underline mx-auto col-12">FAQ&apos;s</h2>
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

export default Trauma;
