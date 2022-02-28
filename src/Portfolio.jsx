import "./scss/Portfolio.scss";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function Portfolio() {
  return (
    <div className="Portfolio">
      <header>
        <Navbar />
      </header>

      <AboutMe />
    </div>
  );
}

export default Portfolio;
