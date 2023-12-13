import React from "react";

export default function Header() {
  return (
    <>
      <div class="bgblur"></div>
      <div className="header">

        <div className="hero-txtcontent">
        <h1>Hello There!!</h1>
        <p className="hero">
          I'm Aishat, an accomplished Frontend Dev and UI/UX Designer with over
          a year of professional experience. I am a devoted problem solver who
          passionately merges the realms of creativity and technology,
          exhibiting a keen enthusiasm for technology and Web3. <br /> My focus lies in
          crafting user-centric, aesthetically pleasing websites that seamlessly
          harmonize form and function. Guided by a commitment to innovation, I
          consistently stay at the forefront of design and development trends,
          shaping my professional ethos.
        </p>
        </div>
        
        <button className="secondary">
            <a href="#">Read more </a>
        </button>
      </div>
    </>
  );
}
