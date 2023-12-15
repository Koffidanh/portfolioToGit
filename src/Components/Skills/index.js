import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascriptImg from "./images/javaimag.png";
import Java from "./images/jav.png";
import CImage from "./images/cimag.png";
import CSS from "./images/CSS3.png";
import HTMLImag from "./images/HTML5_Badge.svg.png";
import mysql from "./images/mysql.png";
import nodeImag from "./images/node.png";
import reactImag from "./images/react.png";

import "./index.css";

function index() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="skillsContainer"></div>
      <div className="skillsText">Skills</div>
      <div className="skillsCarousel">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          transitionDuration={2000}
          autoPlay="true"
          autoPlaySpeed={4000}
        >
          <div className="singleSkillsContainer">
            <img
              className="skillsImage"
              src={javascriptImg}
              alt="javascriptImage"
            />
          </div>
          <div className="singleSkillsContainer">
            <img className="skillsImage" src={Java} alt="JavaImage" />
          </div>
          <div className="singleSkillsContainer">
            <img className="skillsImage" src={CImage} alt="C++Imag" />
          </div>
          <div className="singleSkillsContainer">
            <img className="skillsImage" src={CSS} alt="CSS" />
          </div>
          <div className="singleSkillsContainer">
            <img className="skillsImage" src={HTMLImag} alt="HTMLImag" />
          </div>
          <div className="singleSkillsContainer">
            <img
              className="skillsImage"
              src={mysql}
              alt="mysql"
              style={{ width: "8vw" }}
            />{" "}
          </div>
          <div className="singleSkillsContainer">
            <img
              className="skillsImage"
              src={nodeImag}
              alt="nodeImag"
              style={{ width: "8vw" }}
            />
          </div>
          <div className="singleSkillsContainer">
            <img className="skillsImage" src={reactImag} alt="reactImag" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default index;
