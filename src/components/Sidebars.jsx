import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

export default function Sidebars() {
  return (
    <section className="Sidebars">
      <ul className="leftSide">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rcamach7"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/rcamach7"
          >
            <FontAwesomeIcon icon={faDev} className="icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ricardocamachomireles/"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </li>
        <li className="bar"></li>
      </ul>

      <ul className="rightSide">
        <li className="email">
          <address>
            <a href="mailto:contact@ricardo-camacho.dev">
              contact@ricardo-camacho.dev
            </a>
          </address>
        </li>
        <li className="bar"></li>
      </ul>
    </section>
  );
}
