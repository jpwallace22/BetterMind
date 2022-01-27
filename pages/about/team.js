import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TeamMember from "../components/TeamMember";
import { teamMembers } from "../../public/teamData";

function Team() {
  const title = "The Team";
  return (
    <>
      <Head>
        <title>BetterMind - Our Team</title>
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
      </main>

      <Footer />
    </>
  );
}

export default Team;
