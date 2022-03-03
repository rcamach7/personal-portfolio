import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <h2 className="section-title">
        <span className="numbering">03.</span> What's Next?
      </h2>

      <div className="contact-me">
        <h1 className="contact-me">Get In Touch!</h1>
        <p className="status">
          I am currently looking for opportunities as a full time front end
          developer. I am also always looking for opportunities to contribute or
          team up on projects. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>Say Hello</button>
      </div>

      <div className="contact-links">
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faDev} className="icon" />
      </div>
    </div>
  );
}
