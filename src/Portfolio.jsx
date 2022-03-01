import "./scss/Portfolio.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

function Portfolio() {
  return (
    <main className="Portfolio">
      <header>
        <Navbar />
      </header>

      <Intro />

      <AboutMe />
    </main>
  );
}

export default Portfolio;
