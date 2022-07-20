import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "50%", height: "50%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          My name is Chris Porter and I'm a former chef turned full stack web
          developer. Although a very different career path, there are still
          plenty of transferrable traits such as my ability to make decisions
          under pressure, and my ability to remain calm under pressure. I'm very
          personable, and fit in well with any team. I'm very professional, with
          a strong work ethic, but also like to bring a light heartedness to the
          table, to make work a little bit more enjoyable for everyone. I
          appreciate you taking the time to check out my portfolio and look
          forward to working with you!
        </p>
      </div>
    </section>
  );
}

export default About;
