import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { analytics } from '@vercel/analytics';

function Home() {
  useEffect(() => {
    // Track a page view when the component mounts
    analytics.page();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
