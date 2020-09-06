import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <h1>Contacts</h1>
      <p>Developer: Adam Ross 2020</p>
      <p className="about">
        So, this is a full stack MERN app that I built in the early part of the
        summer of 2020. The COVID lockdown had given me a bit more free time,
        and I decided to start teaching full stack development on my youtube
        channel. Normally, I only taught more computer science focused material,
        but, things get old / boring, and I decided it would be a good idea to
        shift my lessons toward development.
      </p>
      <p className="about">
        I needed an app that was full stack, but more than that, would allow me
        to teach about custom authentication, setting up databases, querying
        data, and use react in the front end to bring it all together. This app
        is the bi-product off all of the above mentioned requirements - and I
        actually learned a pretty good bit about best practices for back end
        development when building it out.
      </p>
      <p className="about">
        On the back end, I use node and express for my API and routing. Then, I
        use express validator for data validation, JSONwebtoken for
        authentication, and a few other packages to help round out the back end.
        On the frontend, it’s a react UI with the context API handling the
        different contacts, auth states, and user states. I find the context API
        to be extremely useful when building out smaller side project apps such
        as these. I have a pattern that I have came to that I am very
        comfortable with when implementing any new context I might need. I’d be
        happy to discuss that, or anything else if the need arises. Either way -
        it was a bunch of fun, and I was able to use it as a pretty good
        teaching tool for many of my students. If you have any questions, feel
        free to email me and I’ll get back to ya as quick as I can. Take it
        easy.
      </p>
    </Fragment>
  );
};

export default About;
