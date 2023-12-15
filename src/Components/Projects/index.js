import { React, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import voyagrImag from "../Projects/images/voyagr-background.png";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import data from "./data";
import "./index.css";
import Navbar from "../Navbar";
function Projects() {
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
  //

  const { setSearchSkillInput, searchData } = useGlobalContext();
  // console.log("project: " + JSON.stringify(data));
  // const [skillFilter, setSkillFilter] = useState("");
  // const [filterData, setFilterData] = useState({});
  // console.log("skilledInputProject: " + setSearchSkillInput);
  return (
    <>
      {searchData?.length > 0 ? (
        <div className="projectContainer">
          <div className="projectProjectsText">PROJECTS</div>
          <Navbar></Navbar>
          <div className="projectCarousel">
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
              {
                // searchData.length > 1 &&
                //   setSearchSkillInput.length > 1 &&
                searchData?.map((project) => (
                  <div className="singleProjectContainer">
                    <p className="projectTextTitle">{project.projectTitle}</p>
                    <img
                      className="projectImage"
                      src={
                        project.image.burgerImag
                          ? project.image.burgerImag
                          : project.image.codeImag
                          ? project.image.codeImag
                          : project.image.noteImag
                          ? project.image.noteImag
                          : project.image.passwordImag
                          ? project.image.passwordImag
                          : project.image.rouletteImag
                          ? project.image.rouletteImag
                          : project.image.voyagrImag
                          ? project.image.voyagrImag
                          : project.image.weatherImag
                          ? project.image.weatherImag
                          : project.image.workPlannerImag
                          ? project.image.workPlannerImag
                          : null
                      }
                      alt={project.alt}
                    />

                    <p className="projectText">{project.description}</p>
                    <div>
                      <button className="projectBtn">
                        <a
                          className="projectBtnText"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </button>
                      <button className="projectBtn">
                        <a
                          className="projectBtnText"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </button>
                    </div>
                  </div>
                ))
              }

              {/* ------ */}
            </Carousel>
          </div>
        </div>
      ) : (
        <>
          <div className="projectContainer">
            <div className="projectProjectsText">PROJECTS</div>
            <div className="projectCarousel">
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
                {data?.map((project) => (
                  <div className="singleProjectContainer">
                    <p className="projectTextTitle">{project.projectTitle}</p>
                    <img
                      className="projectImage"
                      src={
                        project.image.burgerImag
                          ? project.image.burgerImag
                          : project.image.codeImag
                          ? project.image.codeImag
                          : project.image.noteImag
                          ? project.image.noteImag
                          : project.image.passwordImag
                          ? project.image.passwordImag
                          : project.image.rouletteImag
                          ? project.image.rouletteImag
                          : project.image.voyagrImag
                          ? project.image.voyagrImag
                          : project.image.weatherImag
                          ? project.image.weatherImag
                          : project.image.workPlannerImag
                          ? project.image.workPlannerImag
                          : null
                      }
                      alt={project.alt}
                    />

                    <p className="projectText">{project.description}</p>
                    <div>
                      <button className="projectBtn">
                        <a
                          className="projectBtnText"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </button>
                      <button className="projectBtn">
                        <a
                          className="projectBtnText"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code
                        </a>
                      </button>
                    </div>
                  </div>
                ))}

                {/* ------ */}
              </Carousel>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Projects;
