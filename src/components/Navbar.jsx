import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Navbar() {
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    const displayValue = dropDownRef.current.style.display;
    if (displayValue === "" || displayValue === "none") {
      dropDownRef.current.style.display = "flex";
    } else {
      dropDownRef.current.style.display = "none";
    }
  };

  return (
    <nav className="Navbar">
      <img src={logo} alt="" />
      <FontAwesomeIcon
        onClick={toggleDropDown}
        icon={faBars}
        className="hamburger"
      />

      <ul className="expanded-menu">
        <li
          onClick={() =>
            document
              .getElementById("AboutMe")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="menu-numbering">01.</span>About
        </li>
        <li>
          <span className="menu-numbering">02.</span>Projects
        </li>
        <li>
          <span className="menu-numbering">03.</span>Contact
        </li>
        <li>
          <span className="menu-resume">Resume</span>
        </li>
      </ul>

      <div ref={dropDownRef} className="dropDown">
        <FontAwesomeIcon
          icon={faClose}
          className="close-dropDown"
          onClick={toggleDropDown}
        />

        <ul className="expanded-menu">
          <li
            onClick={() => {
              toggleDropDown();
              document
                .getElementById("AboutMe")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="menu-numbering">01.</span>About
          </li>
          <li>
            <span className="menu-numbering">02.</span>Projects
          </li>
          <li>
            <span className="menu-numbering">03.</span>Contact
          </li>
          <li>
            <span className="menu-resume">Resume</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
