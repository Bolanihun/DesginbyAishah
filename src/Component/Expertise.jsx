import React from "react";

export default function Expertise() {
  return (
    <>
      <section className="Expertise-container w-full p-11">
        <div className="Expertise-wrapper flex flex-col">
          <div className="Expertise-title flex flex-col items-center justify-center mb-8">
            <h2 className="mb-5 text-white text-center text-5xl">Experience</h2>
            <p className="w-3/4 text-white text-center text-base tracking-wider ">
              My professional journey is marked by a collaborative spirit.
              Working closely with cross-functional teams, I believe in
              fostering an environment where ideas flourish, and innovative
              solutions take shape.
            </p>
          </div>
          <div className="Expertise-content">
            <div className="Expertise-row w-full flex justify-between items-center py-6 border-t-2">
              <div className="row">
                <div className="title text-white text-xl">NFT FACTORY</div>
                <span className="text-white">Zeus Labs</span>
              </div>

              <div className="row">
                <div className="title text-white text-xl">Aug 2023 - Present</div>
              </div>
              <div className="row">
                <div className="title text-white w-60 text-xl">
                  Design, Rapid Prototyping, Collaboration & Effective
                  Communication
                </div>
              </div>
            </div>

            <div className="Expertise-row w-full flex justify-between items-center py-6 border-t-2 border-b-2">
              <div className="row">
                <div className="title text-white text-xl">Baddie</div>
                <span className="text-white">Hackathon Project</span>
              </div>

              <div className="row">
                <div className="title text-white text-xl">April 2023 - June</div>
              </div>
              <div className="row">
                <div className="title text-white w-60 text-xl">
                  Design, Rapid Prototyping, Collaboration & Effective
                  Communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
