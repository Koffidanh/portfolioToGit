import { React, useEffect, useState } from "react";
import "./index.css";
import logo from "./images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";
import Projects from "../Projects";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import {
  faUser,
  faComputer,
  faMobilePhone,
  faPaperPlane,
  faLinkedin,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const { setSearchInputs } = useGlobalContext();
  // const [skillFilter, setSkillFilter] = useState("");
  const handleOnChange = (event) => {
    setSearchInputs(event.target.value);
  };

  const { setProjectsInputs } = useGlobalContext();
  return (
    <>
      <div className=" navbarContainer">
        <div>
          <div class="sidenav">
            {/* <div className="navLogo"> */}
            <img className="navLogoImage" src={logo} alt="KuraSoftware" />
            {/* </div> */}
            <div className="navIcon">
              <ScrollLink to="profile" smooth duration={500}>
                <a
                  className="navBarProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FontAwesomeIcon icon={faUser} size="2x" alt="profile" />{" "}
                </a>
              </ScrollLink>
              <ScrollLink to="projects" smooth duration={500}>
                <a
                  className="navBarProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setProjectsInputs("web")}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faComputer}
                    size="2x"
                    alt="computer"
                  />{" "}
                </a>
              </ScrollLink>
              <ScrollLink to="projects">
                <a
                  className="navBarProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setProjectsInputs("mobile")}
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faMobilePhone}
                    size="2x"
                    alt="phone"
                  />{" "}
                </a>
              </ScrollLink>
              <a
                className="navBarProjects"
                href="mailto: koffidanh@kurasoftware.com"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="2x"
                  alt="sendEmail"
                />{" "}
              </a>
              <a
                className="navBarProjects"
                //   href="mailto: koffidanh@kurasoftware.com"
                target="_blank"
                //   rel="noopener noreferrer"
              >
                {" "}
                {/* <FontAwesomeIcon icon={} size="2x" alt="phone" />{" "} */}
              </a>
            </div>

            <input
              type="text"
              placeholder="Search Skills..."
              onChange={handleOnChange}
              name="search"
              className="searchInput"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
