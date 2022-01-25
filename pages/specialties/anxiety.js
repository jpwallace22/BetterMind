import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ThreeWhats from "../components/ThreeWhats";
import ThreeServices from "../components/ThreeServices";

function Anxiety() {
  //TODO need to change the phil image

  const title = "Anxiety & Depression";
  const whatToExpect = `Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. CBT focuses on changing the automatic negative thoughts that can contribute to and worsen emotional difficulties, depression, and anxiety.`;
  const whatItIs = `Anxiety disorders are real, serious medical conditions. Anxiety disorders are the most common and pervasive mental disorders in the United States. 
Depression is a condition in which a person feels discouraged, sad, hopeless, unmotivated, or disinterested in life in general for more than two weeks and when the feelings interfere with daily activities`;
  const forMe = `Having a low mood or feeling on edge are common experiences for us all. When these moods persist, it may be that you are experiencing depression or anxiety – or both. These self tests ask some important questions that can help you take stock of where you are at so you can make a plan for feeling better sooner.`;

  const individualFaq = [
    {
      q: `Do I have an anxiety disorder?`,
      a: `Anxiety is a normal part of living. It’s a biological reaction—the body’s way of telling us something isn’t right. It keeps us from harm’s way and prepares us to act quickly in the face of danger. But if your anxiety becomes overwhelming and persistent, or if it interferes with your regular daily activities, or even makes them impossible, you may have an anxiety disorder.`,
    },
    {
      q: `What causes anxiety disorders?`,
      a: `Researchers are learning that anxiety disorders run in families, and that they have a biological basis, much like allergies or diabetes and other disorders. Anxiety disorders may develop from a complex set of risk factors, including genetics, brain chemistry, personality, and life events. Find out more.`,
    },
    {
      q: `What is the difference between depression and sadness?`,
      a: `Experiencing sadness at one time or another is part of the normal human experience. However, depression is more than the occasional sadness that people experience. When an individual suffers from depression, the sadness tends to be more pervasive or long lasting, and can be accompanied by one or more of the following: decreased interest in pleasurable activities, feelings of hopelessness, low self-worth, excessive guilt, decrease in energy, concentration difficulties, appetite changes, sleep difficulty or excessive sleep, headaches, body aches and pains, and/or thoughts of suicide.`,
    },
    {
      q: `Can depression affect children?`,
      a: `Just like adults, children can suffer from depression that significantly impairs their social, academic and/or other domains of functioning. For more information on childhood depression, check out this ADAA blog post`,
    },
    {
      q: `What is postpartum depression?`,
      a: `When feelings of sadness, low mood, or emptiness after the birth of the baby are significant and persists for 2 weeks or longer, postpartum depression may be present. It may be accompanied by hopelessness, crying spells, decrease in interest or motivation, worthlessness, decreased energy, thoughts of suicide, thoughts of hurting the baby, lack of interest in the baby, sleep difficulty or excessive sleep, appetite increase or decrease, and/or concentration, memory difficulties. Postpartum depression can affect both the mother and the baby in various, significant ways. Timely treatment is important.`,
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
            In general‚ about 1 out of every 6 adults will have depression at
            some time in their life. Depression affects about 16 million
            American adults every year. Anyone can get depressed, and depression
            can happen at any age and in any type of person.{" "}
          </p>
          <p>
            Many people who experience depression also have other mental health
            conditions. Anxiety disorders often go hand in hand with depression.
            People who have anxiety disorders struggle with intense and
            uncontrollable feelings of anxiety, fear, worry, and/or panic. These
            feelings can interfere with daily activities and may last for a long
            time.
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
                CBT is about more than identifying thought patterns; it is
                focused on using a wide range of strategies to help people
                overcome these thoughts. Techniques may include journaling,
                role-playing, relaxation techniques, and mental distractions.
              </p>
              <p>
                It is important to learn how thoughts, feelings, and situations
                can contribute to maladaptive behaviors. The process can be
                difficult, especially for people who struggle with
                introspection, but it can ultimately lead to self-discovery and
                insights that are an essential part of the treatment process.
              </p>
              <p>
                It is important to start practicing new skills that can then be
                put in to use in real-world situations. For example, a person
                with a substance use disorder might start practicing new coping
                skills and rehearsing ways to avoid or deal with social
                situations that could potentially trigger a relapse.
              </p>
            </section>

            <h2 className="underline mx-auto col-12">Our Services</h2>
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

export default Anxiety;
