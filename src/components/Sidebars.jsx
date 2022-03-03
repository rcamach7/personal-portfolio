import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
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
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </li>
        <li className="bar"></li>
      </ul>

      <ul className="rightSide">
        <li className="email">
          <address>
            <a href="mailto:ricmireles7@gmail.com">ricmireles7@gmail.com</a>
          </address>
        </li>
        <li className="bar"></li>
      </ul>
    </section>
  );
}
