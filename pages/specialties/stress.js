import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThreeWhats from "../components/ThreeWhats";
import ThreeServices from "../components/ThreeServices";

function Stress() {
  //TODO need to change the phil image

  const title = "Stress Management";
  const whatToExpect = `Stress is caused by our thoughts about a situation, not by the situation itself. Two people in the exact same situation might have different levels of stress (or no stress at all), just because of how they think about it. The process of identifying and changing these irrational thoughts is called cognitive restructuring`;
  const whatItIs = `Stress is a normal psychological and physical reaction to the demands of life. A small amount of stress can be good, motivating you to perform well. But multiple challenges daily, such as sitting in traffic, meeting deadlines and paying bills, can push you beyond your ability to cope.`;
  const forMe = `Stress management gives you a range of tools to reset your alarm system. It can help your mind and body adapt (resilience). Without it, your body might always be on high alert. Over time, chronic stress can lead to serious health problems.`;

  const individualFaq = [
    {
      q: `Is all stress bad?`,
      a: `No. Stress can motivate people to prepare or perform, like when they need to take a test or interview for a new job. Stress can be life-saving in response to danger as your body prepares to face a threat or flee to safety. In these situations, your pulse quickens, you breathe faster, your muscles tense, your brain uses more oxygen and increases activity–all functions aimed at survival.`,
    },
    {
      q: `Does stress affect my blood pressure?`,
      a: `Stress has not been shown to directly cause high blood pressure, but it can lead to unhealthy lifestyle choices that are associated with high blood pressure. Chronic stress can weaken your immune system and cause uncomfortable physical symptoms like headaches and stomach problems.`,
    },
    {
      q: `What can I do to reduce my stress?`,
      a: `There are countless quick, easy, and cost-free actions you can take to reduce your stress. Here’s a few to consider: meditate, exercise, create a support network, think positive, avoid excess caffeine, laugh, focus on you.`,
    },
    {
      q: `Who does stress affect?`,
      a: `Everyone feels stressed from time to time. Some people cope with stress more effectively or recover from stressful events more quickly than others. There are different types of stress–all of which carry physical and mental health risks. A stressor may be a one time or short term occurrence, or it can keep happening over a long period of time.`,
    },
    {
      q: `What are the signs of stress?`,
      a: `Feeling stress is a fact of life for most people. But it affects everyone differently. What causes stress for you may not be stressful for someone else. That’s because how you view a situation affects how much stress it causes you. Only you can figure out whether you have too much stress in your life.`,
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

      <main className="interior stress grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
          <p>
            Stress management gives you a range of tools to reset your alarm
            system. It can help your mind and body adapt (resilience). Without
            it, your body might always be on high alert. Over time, chronic
            stress can lead to serious health problems.{" "}
          </p>
          <p>
            Your brain comes hard-wired with an alarm system for your
            protection. When your brain perceives a threat, it signals your body
            to release a burst of hormones that increase your heart rate and
            raise your blood pressure. This &quot;fight-or-flight&quot; response
            fuels you to deal with the threat.{" "}
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
                Psychotherapy – This type of therapy takes place with a
                psychologist, psychiatrist, or another type of mental health
                professional. In psychotherapy, people are encouraged to
                discover the underlying causes of their stress so that they can
                learn strategies for improving their quality of life.{" "}
              </p>
              <p>
                Behavior Therapy – There are several types of behavioral
                therapy. Cognitive-behavioral therapy (CBT) is one of the most
                beneficial ways to deal with stress. In CBT, people are taught
                to recognize and change negative thought patterns and apply
                different tools to help them improve their negative-self talk to
                be more positive. For relieving stress, this means people can
                learn to be less hard on themselves and to recognize that it’s
                ok to reduce some of their burdens without seeing themselves as
                a failure.{" "}
              </p>
              <p>
                Alternative Therapies – In addition to traditional methods of
                stress therapy, there are many activities that an individual can
                do to alleviate their stress. Activities like exercise, yoga,
                acupuncture, massage, meditation, and social support are all
                useful tools to try if a person is faced with intense feelings
                of stress or pressure.{" "}
              </p>
            </section>

            <h2 className="underline mx-auto col-12">Our Services</h2>
            <ThreeServices />
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

export default Stress;
