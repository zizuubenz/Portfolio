import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Projects/>
      <Contact/>

    </>
  );
}

export default Home;
