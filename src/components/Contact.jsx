import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h2 className="section-title">
        <span className="numbering">03.</span> What's Next?
      </h2>

      <div className="contact-me reveal">
        <h1 className="contact-me">Get In Touch!</h1>
        <p className="status">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <address>
          <a href="mailto:ricmireles7@gmail.com">Say Hello</a>
        </address>
      </div>

      <div className="contact-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rcamach7"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/rcamach7"
        >
          <FontAwesomeIcon icon={faDev} className="icon" />
        </a>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </div>
    </section>
  );
}
