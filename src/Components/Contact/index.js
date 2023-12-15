import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function index() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactText">Contact</div>
        <div className="singleContactContainer">
          <a
            className="navbar-brand"
            href="mailto: koffidanh@kurasoftware.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faPaperPlane} size="2x" alt="email" />{" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default index;
