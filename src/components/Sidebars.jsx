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
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faDev} className="icon" />
        </li>
        <li className="bar"></li>
      </ul>

      <ul className="rightSide">
        <li className="email">ricmireles7@gmail.com</li>
        <li className="bar"></li>
      </ul>
    </section>
  );
}
