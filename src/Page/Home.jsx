import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import "./Spinner.css";

function Home() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(false);
    }, 4000); // 6000 milliseconds = 6 seconds

    return () => {
      clearTimeout(spinnerTimer); // Clear the timer when the component unmounts
    };
  }, []);

  return (
    <>
      {showSpinner ? (
        <div className="spinner"></div>
      ) : (
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
      )}
    </>
  );
}

export default Home;
