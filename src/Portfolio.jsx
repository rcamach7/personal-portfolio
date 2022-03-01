import "./scss/Portfolio.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Sidebars from "./components/Sidebars";

function Portfolio() {
  return (
    <main className="Portfolio">
      <header>
        <Navbar />
      </header>

      <Intro />

      <AboutMe />

      <Sidebars />
    </main>
  );
}

export default Portfolio;
