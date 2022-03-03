import "./scss/Portfolio.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Sidebars from "./components/Sidebars";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Portfolio() {
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
