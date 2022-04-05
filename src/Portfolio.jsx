import "./scss/Portfolio.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Sidebars from "./components/Sidebars";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
  }, []);

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <main className="Portfolio">
      <header>
        <Navbar />
      </header>
      <Intro />

      <AboutMe />
      <Projects />
      <Contact />

      <Sidebars />
    </main>
  );
}

export default Portfolio;
