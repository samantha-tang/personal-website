import React from "react";

const About: React.FC = () => {
  return (
    <section className="content">
      <h1 className="hero">About me</h1>
      <div className="content-box">
        <p>
          Hello! I'm Samantha and I study computational geometry.
          In particular, I look at a variation of the <a href="https://en.wikipedia.org/wiki/Opaque_set" target="_blank" rel="noopener noreferrer">Opaque Set Problem</a> that minimises the cardinality of an opaque set.
        </p>
        <p>
          I also am an avid programmer, and have been coding since I was a teen. Send me a message if you'd like to work on a project together!
        </p>
        <p>
          Some other fun facts:
          <ul>
            <li>I play violin in a string quartet called the Quarternions!</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default About;