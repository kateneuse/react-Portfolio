import React from 'react';
import me from "../../assets/bio/me.jpg";


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div class="me">
          <img src={me} alt="me" width={300} height={400}/>
        </div>
        <p>
        Hi! My name is Kate Neuse, welcome to my portfolio!
        Last year I finished school at MCTC with an associates degree in 
        Web Design & Front End Development. After that, I decided to keep 
        exploring web development after I surprisingly enjoyed that over 
        design. I am currently in a full time coding bootcamp at the U of M 
        and am excited to start a career in software development once I finish!
        </p>
        <p>
          This is my first portfolio being made with React, so go easy on me!
        </p>
       
      </div>
    </section>
  );
}

export default About;
