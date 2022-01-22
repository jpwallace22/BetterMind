import React from "react";
import { FaLaptopMedical, FaMale, FaUserFriends } from "react-icons/fa";
import Button from "./Button";

function ThreeServices() {
  return (
    <section className="services px-1 col-12">
      <article className="card flex">
        <FaLaptopMedical
          size={70}
          className="mx-auto"
          color={"var(--light-blue)"}
        />
        <h3 className="mx-auto">Telehealth</h3>
        <p className="three-lines">
          We’re living, working, and trying to relax all in the same space. So,
          online therapy makes sense. But maybe you’ve wondered… “Is teletherapy
          as effective as in-person therapy? Won’t it be awkward and
          impersonal?” You’re not alone there. I used to have the same
          questions. But research has shown that teletherapy is just as
          effective as in-person services in most cases. And it has benefits
          that traditional in-office therapy doesn’t have.{" "}
        </p>
        <Button to="/services/online" className="mx-auto">
          Continue
        </Button>
      </article>
      <article className="card flex">
        <FaMale size={70} className="mx-auto" color={"var(--light-blue)"} />
        <h3 className="mx-auto">Individual</h3>
        <p className="three-lines">
          You feel overwhelmed, lost, and hopeless. You’re struggling to get
          back to your “normal self” or having trouble working through things on
          your own. But what if you could evolve into something even better than
          your previous normal self and use the crappy stuff you’ve been dealing
          with to grow into an even stronger and more amazing version of
          yourself?{" "}
        </p>
        <Button to="/services/individual" className="mx-auto">
          Continue
        </Button>
      </article>
      <article className="card flex">
        <FaUserFriends
          size={70}
          className="mx-auto"
          color={"var(--light-blue)"}
        />
        <h3 className="mx-auto">Couples</h3>
        <p className="three-lines">
          Wondering where all the romance went? Or feeling stuck in a
          relationship where “taking breaks” and the “silent treatment” just
          aren’t working? Maybe you’re feeling like your intimacy or sex life is
          stale? Maybe there’s been infidelity? Or maybe you just need a higher
          level of understanding and communication? There are many reasons to
          seek couples counseling. Whatever the reason, know that you are not
          alone.{" "}
        </p>
        <Button to="/services/couples" className="mx-auto">
          Continue
        </Button>
      </article>
    </section>
  );
}

export default ThreeServices;
