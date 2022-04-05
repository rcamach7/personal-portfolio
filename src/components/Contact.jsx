import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "awdwa",
    email: "waddwa@gmail.com",
    message: "wwaddw",
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    axios
      .post("https://formspree.io/f/xyyodvoe", message)
      .then(() => {
        console.log("Message sent");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <section className="Contact" id="Contact">
      <h2 className="section-title">
        <span className="numbering">03.</span> What's Next?
      </h2>

      <form
        className="contact-form reveal"
        onSubmit={(e) => handleFormSubmission(e)}
      >
        <div className="formTitle">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>Get in touch!</p>
        </div>
        <input
          className="inputField"
          type="text"
          placeholder="Your name"
          name="name"
        />
        <input
          className="inputField"
          type="email"
          placeholder="Your email"
          name="email"
          required
        />
        <textarea
          className="inputField"
          cols="30"
          rows="5"
          placeholder="Your message"
          name="message"
          required
        />

        <input type="submit" className="submit-btn" value="Send message" />
        {/* Use default mailer instead */}
        <address className="default-mailer">
          <a href="mailto:ricmireles7@gmail.com">use default mailer instead</a>
        </address>
      </form>

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
