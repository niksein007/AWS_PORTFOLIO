import React from "react";
import profilePic from "../pictures/profilepic.png";

function About() {
  return (
    <div id="About">
      <img src={profilePic} alt="" id="profilePic" />
      <p>
        Hi, i'm Mark Pearce a cloud engineer and sofware developer. My curiosity
        about things expecially in the field of IT technology lead me to undergo
        a coding bootcamp at Code Nation machester and subsequenty applied for
        AWS reStart program with Generation UK.
      </p>
      <p>
        {" "}
        During the course of my training i have acquired some amazing skills and
        learnt some progamming languages. I am confident with the use of Linux,
        javascript, python, HTML, CSS , SASS and also React. I have also achived
        the Cloud Practitioner Certification in AWS and in the process of
        acquiring the Solution Architect Associate Certification in AWS.
      </p>
      <p>
        I believe in continuous learning and change and hope to work in an
        environment where i can utilise my acquired skills and also develope it
        further. Please take a moment to look at my projects below.
      </p>
    </div>
  );
}
export default About;
