import React from "react";

export default function Skills() {
  return (
    <>
      <section className="Skill-container w-full p-11">
        <div className="skills-wrapper flex space-x-80">
          <div className="skill-textcontent flex flex-col">
            <h2 className="mb-5 text-white text-5xl">Design Philosophy</h2>
            <p className="w-96 text-white text-base tracking-wider">
              In my design journey, I blend innovation with usability, aiming
              for designs that not only look beautiful but also enhance the
              user's journey. My love for clean, intuitive interfaces is matched
              by a keen eye for detail, ensuring every pixel serves a purpose.
            </p>
          </div>
          <div className="skill-cards ">
            <div className="card w-80 px-8 py-4 h-72">
              <div className="title text-white text-2xl tracking-wide mb-2">
                Skills
              </div>
              <ol>
                <li className="text-white text-base font-normal tracking-widest">
                  User research
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Wireframing
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Prototyping
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Information Architecture
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Visual Design
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Interaction Design
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Usability studies
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Responsive design
                </li>
              </ol>
            </div>
            <div className="card w-80 px-8 py-4 h-72">
              <div className="title text-white text-2xl tracking-wide mb-2">
                Tools
              </div>
              <ol>
                <li className="text-white text-base font-normal tracking-widest">
                  Figma
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Adobe XD
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Adobe Photoshop
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Adobe Illustrator
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Spline
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="Skill-container w-full p-11">
        <div className="skills-wrapper flex space-x-80">
          <div className="skill-textcontent flex flex-col">
            <h2 className="mb-5 text-white text-5xl">Development Expertise</h2>
            <p className="w-2/3 text-white text-base tracking-wider">
              As a frontend developer, I specialize in crafting responsive and
              performant web applications. Proficient in HTML, CSS, and
              JavaScript, I bring designs to life with frameworks like React.js.
              I embrace the challenge of creating user-friendly interfaces that
              seamlessly adapt to various devices.
            </p>
          </div>
          <div className="skill-cards ">
            <div className="card w-80 px-8 py-4 h-72">
              <div className="title text-white text-2xl tracking-wide mb-2">
                Skills
              </div>
              <ol>
                <li className="text-white text-base font-normal tracking-widest">
                  Testing & Debugging
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Web performance optimization
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Cross-browser compatibility
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Collaboration & Communication
                </li>
              </ol>
            </div>
            <div className="card w-80 px-8 py-4 h-72 ">
              <div className="title text-white text-2xl tracking-wide mb-2">
                Technologies
              </div>
              <ol>
                <li className="text-white text-base font-normal tracking-widest">
                  HTML5
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  CSS3
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  SASS\ SCSS
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Javascript (ES6)
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  React JS
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Tailwind CSS
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Bootsrap
                </li>
                <li className="text-white text-base font-normal tracking-widest">
                  Version Control (Git/Github)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
