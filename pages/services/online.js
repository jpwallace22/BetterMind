import Head from "next/head";
import { FaClipboardCheck, FaQuestion, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Online() {
  const title = "Online Therapy";

  const individualFaq = [
    {
      q: `Are there any drawbacks?`,
      a: `Some people may feel that online therapy is a bit impersonal compared with face-to-face treatment. In addition, therapists aren’t able to read body language in the same way (even if video chats are used).`,
    },
    {
      q: `What technical equipment do I need?`,
      a: `You need an internet-connected electronic device like a computer, phone, or tablet with a microphone and video access to meet with your therapist. Some clients also prefer using headphones during their sessions. Beyond technical equipment, it’s important to find a space free from distractions, where you’ll be fully comfortable opening up about personal and challenging subjects in a live therapy session.`,
    },
    {
      q: `Will my insurance company cover it?`,
      a: `This is an answer you probably don’t like to hear but also don’t find surprising: it depends. Some insurance companies contract with specific, in-network therapists to subsidize costs. At this time, most insurance companies do not reimburse for online therapy services provided through the major platforms. To determine potential coverage, contact your insurance’s membership services before starting your treatment. In many situations, online therapy is cheaper than using insurance for traditional, in-person therapy.`,
    },
    {
      q: `Can I chat with a therapist online or via text messages?`,
      a: `Yes, most platforms allow you to leave messages for your therapist whenever you need to talk. Additionally, these platforms offer various communication methods for corresponding with your therapist. Typically, you may choose between:`,
    },
    {
      q: `If I am not that tech-savvy will I still be able to do it?`,
      a: `Most online therapy is fairly intuitive and straightforward. However, you need some basic understanding of using the Internet, connecting to WiFi, and downloading apps (if using a tablet or cell phone). Live video sessions are a lot like Facetime, Zoom, Google Meet, and similar video chatting interfaces. Most providers offer support if you need technological assistance.`,
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

      <main className="interior online grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
          <p>
            We’re living, working, and trying to relax all in the same space.
            So, online therapy makes sense. But maybe you’ve wondered… “Is
            teletherapy as effective as in-person therapy? Won’t it be awkward
            and impersonal?” You’re not alone there. I used to have the same
            questions. But research has shown that teletherapy is just as
            effective as in-person services in most cases. And it has benefits
            that traditional in-office therapy doesn’t have.{" "}
          </p>
          <p>
            Telehealth makes therapy available to more people. I love this
            because, like so many other services, you don’t have to pick a
            therapist that you may not totally jive with just because their
            office is an easy commute away. It also eliminates commute times.
            There’s no more sitting in traffic or factoring in commute time to
            go to an office.
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
                  Before each session, I’ll send a link that you can access on
                  your phone, computer, or tablet. The link is generated through
                  the secure and HIPPA-compliant platform called SimplePractice.
                  The first time you use it, it will ask you to connect to your
                  device’s microphone and camera, and then you’ll be good to go!{" "}
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
                  It eliminates commute times! There’s no more sitting in
                  traffic or factoring in commute time to go to an office. You
                  can meet during your lunch hour, in between meetings, when the
                  kids are napping, or any other hour-long window you have that
                  may have been otherwise lost to aimlessly scrolling on your
                  phone.{" "}
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
                  Distance doesn’t have to be a barrier to getting the support
                  you deserve. We are physically located in San Diego, but have
                  clients that live all over the state. With online therapy, we
                  can do all the same things we would do in person, including
                  trauma processing, somatic work, and EMDR!{" "}
                </p>
              </article>
            </section>
            <div className="phil-image"></div>
            <section className="philosophy col-12 px-1">
              <h2>The BetterMind approach</h2>
              <p>
                Not all forms of online therapy are the same and the treatment
                approach you choose might depend on a variety of factors
                including the nature of your condition and your therapeutic
                goals. Some forms such as cognitive-behavioral therapy (CBT) are
                more popular in online formats
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

export default Online;
