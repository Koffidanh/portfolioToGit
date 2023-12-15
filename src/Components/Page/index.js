import React from "react";
import Profile from "../Profile";
import Projects from "../Projects";
import Skills from "../Skills";
import { Element } from "react-scroll";
import Contact from "../Contact";
import "./index.css";
import Navbar from "../Navbar";
function index() {
  return (
    <div className="pageContainer">
      <Navbar></Navbar>
      <Element name="profile">
        <Profile></Profile>
      </Element>
      <Element name="projects">
        <Projects></Projects>
      </Element>
      <Element name="skills">
        <Skills></Skills>
      </Element>

      {/* <Contact></Contact> */}
    </div>
  );
}
export default index;
