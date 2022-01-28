import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import { teamMembers } from "../../public/teamData";
import Image from "next/image";

function Team() {
  const title = "Our Team";
  return (
    <>
      <Head>
        <title>BetterMind - {title}</title>
        <meta
          name="BetterMind Counseling Collective"
          content="A collective of Therapists and Doctors delivering cutting edge mental healthcare to the greater San Diego area"
        />
      </Head>
      <Header />
      <main className="interior team grid">
        <div className="interior-gradient">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content px-1">
          <h2 className="hero">{title}</h2>
          <p>
            Our talented &amp; experienced team delivers amazing results. We
            have a can-do attitude backed up by more than 24 years experience
            delivering high-end, therapy and counseling services. Though we may
            not look like your typical doctors office, we are all HIGHLY
            qualified and skilled in our professions. We just know that its
            important to let lose a little bit.
          </p>
        </div>
        <div className="col-12 px-1">
          <ul className="hex-grid__list">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                alt={member.alt}
                name={member.name}
                title={member.title}
                description={member.description}
              />
            ))}
          </ul>
        </div>
        <h2 className="underline col-12 mx-auto">Our Partners</h2>
        <div className="sponsors col-12">
          <a
            href="https://plattonline.com/webcampaign/bitesized"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/images/bitesizedad.webp"}
              alt={
                'Advertisement for bitesized homes: A mid-century modern home tiny home boasting "bite-sized homes, full course living"'
              }
              width={300}
              height={250}
            />
          </a>
          {/* THIS IS WHERE LUKES AD WILL GO */}
          {/* <a 
            href="https://plattonline.com/webcampaign/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={"/images/"} width={300} height={250} />
          </a> */}
          <a
            href="https://www.panicaway.com/affiliates/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={"/images/panic-away.webp"}
              width={300}
              height={250}
              alt="An advertisement showing the PanicAway dvd's for purchase"
            />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Team;
