import React from 'react';
import Header from "../Component/Header";
import Project from "../Component/Project";
import Footer from "../Component/Footer";

export default function Home(){
    return(
        <>
        <Header content="I'm Aishat, an accomplished Frontend Dev and UI/UX Designer with over
          a year of professional experience. I am a devoted problem solver who
          passionately merges the realms of creativity and technology,
          exhibiting a keen enthusiasm for technology and Web3.My focus lies in
          crafting user-centric, aesthetically pleasing websites that seamlessly
          harmonize form and function. Guided by a commitment to innovation, I
          consistently stay at the forefront of design and development trends,
          shaping my professional ethos.">

        </Header>
        <Project/>
        <Footer/>

        </>
    )
}